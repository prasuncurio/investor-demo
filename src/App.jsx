import { useState } from 'react';
import PatientOverview from '@/components/PatientOverview';
import QueryInterface from '@/components/QueryInterface';
import AnalysisAnimation from '@/components/AnalysisAnimation';
import InterventionComparison from '@/components/InterventionComparison';
import patientData from '@/data/sarah-patient.json';

function App() {
  const [currentView, setCurrentView] = useState('overview'); // 'overview' | 'query' | 'analysis' | 'comparison'
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

  const handleNewQueryFromComparison = (newQuery) => {
    setSelectedQuery(newQuery);
    setCurrentView('analysis');
  };

  const handleBackToOverview = () => {
    setCurrentView('overview');
    setSelectedQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
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
          onComplete={handleAnalysisComplete}
          patientName={patientData.name}
        />
      )}

      {currentView === 'comparison' && (
        <InterventionComparison
          query={selectedQuery}
          patientName={patientData.name}
          patientData={patientData}
          onBackToOverview={handleBackToOverview}
          onNewQuery={handleNewQueryFromComparison}
        />
      )}
    </div>
  );
}

export default App
