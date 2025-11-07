import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import PatientOverview from '@/components/PatientOverview';
import QueryInterface from '@/components/QueryInterface';
import AnalysisAnimation from '@/components/AnalysisAnimation';
import InterventionComparisonBreastCancer from '@/components/InterventionComparisonBreastCancer';
import SupplementAssessmentResults from '@/components/results/SupplementAssessmentResults';
import patientData from '@/data/jennifer-patient.json';
import { classifyQuery, QUERY_TYPES } from '@/lib/query-classifier';

// Breast cancer-specific queries focused on safety
const breastCancerQueries = [
  {
    id: 'safe-relief',
    text: 'How can I safely relieve her hot flashes?',
  },
  {
    id: 'safest-treatment',
    text: "What's the safest treatment given her cancer risk?",
  },
  {
    id: 'hrt-question',
    text: 'Can she take HRT with high breast cancer risk?',
  },
  {
    id: 'compare-options',
    text: 'Compare all options for vasomotor symptoms in high-risk patients',
  },
  {
    id: 'supplements',
    text: 'Are there non-prescription supplements that could help without hormones?',
  },
];

export default function BreastCancerDemo() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('overview');
  const [selectedQuery, setSelectedQuery] = useState('');
  const [queryType, setQueryType] = useState(null);

  const handleStartQuery = () => {
    setCurrentView('query');
  };

  const handleQuerySubmit = (query) => {
    setSelectedQuery(query);
    const classification = classifyQuery(query);
    setQueryType(classification.type);
    setCurrentView('analysis');
  };

  const handleAnalysisComplete = () => {
    setCurrentView('comparison');
  };

  const handleBackToOverview = () => {
    setCurrentView('overview');
    setSelectedQuery('');
    setQueryType(null);
  };

  const handleNewQuery = (newQuery) => {
    setSelectedQuery(newQuery);
    const classification = classifyQuery(newQuery);
    setQueryType(classification.type);
    setCurrentView('analysis');
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar
        demoTitle="Breast Cancer Risk Management"
        showBackButton={true}
        onBack={handleNavigateHome}
      />
      <div className="pt-4 sm:pt-6">
        {currentView === 'overview' && (
          <PatientOverview
            patient={patientData}
            onStartQuery={handleStartQuery}
          />
        )}

        {currentView === 'query' && (
          <QueryInterface
            onQuerySubmit={handleQuerySubmit}
            onBack={handleBackToOverview}
            patientName={patientData.name}
            suggestedQueries={breastCancerQueries}
          />
        )}

        {currentView === 'analysis' && (
          <AnalysisAnimation
            query={selectedQuery}
            queryType={queryType}
            patientName={patientData.name}
            onComplete={handleAnalysisComplete}
            useCase="breast-cancer"
          />
        )}

        {currentView === 'comparison' && (
          <>
            {queryType === QUERY_TYPES.SUPPLEMENT_SAFETY_ASSESSMENT ? (
              <SupplementAssessmentResults
                query={selectedQuery}
                patientName={patientData.name}
                patientData={patientData}
                onBackToOverview={handleBackToOverview}
                onNewQuery={handleNewQuery}
              />
            ) : (
              <InterventionComparisonBreastCancer
                query={selectedQuery}
                patientName={patientData.name}
                patientData={patientData}
                onBackToOverview={handleBackToOverview}
                onNewQuery={handleNewQuery}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
