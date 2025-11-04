import { useState } from 'react';
import PatientOverview from '@/components/PatientOverview';
import QueryInterface from '@/components/QueryInterface';
import AnalysisAnimation from '@/components/AnalysisAnimation';
import patientData from '@/data/sarah-patient.json';

function App() {
  const [currentView, setCurrentView] = useState('overview'); // 'overview' | 'query' | 'analysis' | 'results'
  const [selectedQuery, setSelectedQuery] = useState('');

  const handleStartQuery = () => {
    setCurrentView('query');
  };

  const handleQuerySubmit = (query) => {
    setSelectedQuery(query);
    setCurrentView('analysis');
  };

  const handleAnalysisComplete = () => {
    setCurrentView('results');
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

      {currentView === 'results' && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              Analysis Complete
            </h2>
            <p className="text-muted-foreground mb-2">
              Query: &ldquo;{selectedQuery}&rdquo;
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Results screen (InterventionComparison) will be implemented in the next phase.
            </p>
            <button
              onClick={handleBackToOverview}
              className="px-6 py-2 border rounded-lg hover:bg-accent transition-colors"
            >
              Back to Overview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
