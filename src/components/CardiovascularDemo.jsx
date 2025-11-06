import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import PatientOverview from '@/components/PatientOverview';
import QueryInterface from '@/components/QueryInterface';
import AnalysisAnimation from '@/components/AnalysisAnimation';
import InterventionComparison from '@/components/InterventionComparison';
import MechanismExplanation from '@/components/results/MechanismExplanation';
import patientData from '@/data/sarah-patient.json';
import { classifyQuery, QUERY_TYPES } from '@/lib/query-classifier';

export default function CardiovascularDemo() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('overview'); // 'overview' | 'query' | 'analysis' | 'results'
  const [selectedQuery, setSelectedQuery] = useState('');
  const [queryType, setQueryType] = useState(null);
  const [queryClassification, setQueryClassification] = useState(null);

  const handleStartQuery = () => {
    setCurrentView('query');
  };

  const handleQuerySubmit = (query) => {
    // Classify the query to determine which result component to show
    const classification = classifyQuery(query);

    setSelectedQuery(query);
    setQueryType(classification.type);
    setQueryClassification(classification);
    setCurrentView('analysis');

    // Log classification for debugging
    console.log('Query Classification:', {
      query,
      type: classification.type,
      confidence: classification.confidence,
      matchedKeywords: classification.matchedKeywords,
      matchedPhrases: classification.matchedPhrases
    });
  };

  const handleAnalysisComplete = () => {
    setCurrentView('results');
  };

  const handleNewQueryFromResults = (newQuery) => {
    // When user submits a new query from results, classify it
    const classification = classifyQuery(newQuery);

    setSelectedQuery(newQuery);
    setQueryType(classification.type);
    setQueryClassification(classification);
    setCurrentView('analysis');

    console.log('New Query Classification:', {
      query: newQuery,
      type: classification.type,
      confidence: classification.confidence
    });
  };

  const handleBackToOverview = () => {
    setCurrentView('overview');
    setSelectedQuery('');
    setQueryType(null);
    setQueryClassification(null);
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar
        demoTitle="Perimenopausal Cardiovascular Risk"
        showBackButton={true}
        onBack={handleNavigateHome}
      />
      <div className="pt-4 sm:pt-6">
        {currentView === 'overview' && (
          <PatientOverview onStartQuery={handleStartQuery} />
        )}

        {currentView === 'query' && (
          <QueryInterface
            onQuerySubmit={handleQuerySubmit}
            onBack={handleBackToOverview}
            patientName={patientData.name}
          />
        )}

        {currentView === 'analysis' && (
          <AnalysisAnimation
            query={selectedQuery}
            queryType={queryType}
            onComplete={handleAnalysisComplete}
            patientName={patientData.name}
          />
        )}

        {currentView === 'results' && (
          <>
            {/* Query 1: Mechanism Explanation - "Why is her cholesterol rising?" */}
            {queryType === QUERY_TYPES.MECHANISM && (
              <MechanismExplanation
                query={selectedQuery}
                patientName={patientData.name}
                patientData={patientData}
                onBackToOverview={handleBackToOverview}
                onNewQuery={handleNewQueryFromResults}
              />
            )}

            {/* Query 2: Comprehensive Comparison - "What's the best intervention?" */}
            {queryType === QUERY_TYPES.COMPREHENSIVE && (
              <InterventionComparison
                query={selectedQuery}
                queryType={queryType}
                patientName={patientData.name}
                patientData={patientData}
                onBackToOverview={handleBackToOverview}
                onNewQuery={handleNewQueryFromResults}
              />
            )}

            {/* Query 3: Binary Decision - "Should I prescribe a statin?" */}
            {queryType === QUERY_TYPES.BINARY_DECISION && (
              <InterventionComparison
                query={selectedQuery}
                queryType={queryType}
                patientName={patientData.name}
                patientData={patientData}
                onBackToOverview={handleBackToOverview}
                onNewQuery={handleNewQueryFromResults}
              />
            )}

            {/* Query 4: Head-to-Head Comparison - "Compare HRT vs statin" */}
            {queryType === QUERY_TYPES.HEAD_TO_HEAD && (
              <InterventionComparison
                query={selectedQuery}
                queryType={queryType}
                patientName={patientData.name}
                patientData={patientData}
                onBackToOverview={handleBackToOverview}
                onNewQuery={handleNewQueryFromResults}
              />
            )}

            {/* Fallback for unknown query types */}
            {!queryType && (
              <InterventionComparison
                query={selectedQuery}
                queryType={QUERY_TYPES.COMPREHENSIVE}
                patientName={patientData.name}
                patientData={patientData}
                onBackToOverview={handleBackToOverview}
                onNewQuery={handleNewQueryFromResults}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
