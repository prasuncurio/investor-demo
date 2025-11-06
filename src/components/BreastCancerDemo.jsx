import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import PatientOverview from '@/components/PatientOverview';
import QueryInterface from '@/components/QueryInterface';
import AnalysisAnimation from '@/components/AnalysisAnimation';
import InterventionComparisonBreastCancer from '@/components/InterventionComparisonBreastCancer';
import patientData from '@/data/jennifer-patient.json';

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
];

export default function BreastCancerDemo() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('overview');
  const [selectedQuery, setSelectedQuery] = useState('');

  const handleStartQuery = () => {
    setCurrentView('query');
  };

  const handleQuerySubmit = (query) => {
    setSelectedQuery(query);
    setCurrentView('analysis');
  };

  const handleAnalysisComplete = () => {
    setCurrentView('comparison');
  };

  const handleBackToOverview = () => {
    setCurrentView('overview');
    setSelectedQuery('');
  };

  const handleNewQuery = (newQuery) => {
    setSelectedQuery(newQuery);
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
            patientName={patientData.name}
            onComplete={handleAnalysisComplete}
            useCase="breast-cancer"
          />
        )}

        {currentView === 'comparison' && (
          <InterventionComparisonBreastCancer
            query={selectedQuery}
            patientName={patientData.name}
            patientData={patientData}
            onBackToOverview={handleBackToOverview}
            onNewQuery={handleNewQuery}
          />
        )}
      </div>
    </div>
  );
}
