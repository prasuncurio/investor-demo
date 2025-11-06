import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import PatientOverview from '@/components/PatientOverview';
import QueryInterface from '@/components/QueryInterface';
import AnalysisAnimation from '@/components/AnalysisAnimation';
import InterventionComparison from '@/components/InterventionComparison';
import patientData from '@/data/sarah-patient.json';

export default function CardiovascularDemo() {
  const navigate = useNavigate();
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
    </div>
  );
}
