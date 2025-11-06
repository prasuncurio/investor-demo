import { useState } from 'react';
import { motion } from 'framer-motion';
import ScenarioCardBreastCancer from '@/components/comparison/ScenarioCardBreastCancer';
import ChatInterface from '@/components/comparison/ChatInterface';
import ComparisonHeader from '@/components/comparison/ComparisonHeader';
import EvidenceModal from '@/components/modals/EvidenceModal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import {
  breastCancerScenarios,
  breastCancerFollowUpQueries,
  breastCancerKeyInsights
} from '@/lib/breast-cancer-scenarios-data';

export default function InterventionComparisonBreastCancer({
  query,
  patientName,
  patientData,
  onBackToOverview,
  onNewQuery
}) {
  const [expandedScenario, setExpandedScenario] = useState(null);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showRecommendationModal, setShowRecommendationModal] = useState(false);

  const scenarios = [
    breastCancerScenarios['no-action'],
    breastCancerScenarios['vaginal-estrogen'],
    breastCancerScenarios['ssri'],
    breastCancerScenarios['standard-hrt'],
    breastCancerScenarios['fezolinetant'],
    breastCancerScenarios['combined']
  ];

  const handleScenarioExpand = (scenarioId) => {
    setExpandedScenario(expandedScenario === scenarioId ? null : scenarioId);
  };

  const handleNewQuery = (newQuery) => {
    onNewQuery(newQuery);
  };

  const handleShowEvidence = () => {
    setShowEvidenceModal(true);
  };

  const handleGenerateRecommendation = () => {
    setShowRecommendationModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background pb-40"
    >
      {/* Header Section */}
      <ComparisonHeader
        query={query}
        patientName={patientName}
        onBack={onBackToOverview}
        onShowEvidence={handleShowEvidence}
        onGenerateRecommendation={handleGenerateRecommendation}
      />

      {/* Main Comparison Grid */}
      <div className="max-w-[1800px] mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Intervention Comparison - 12 Week Projections
        </h2>

        {/* Scenario Cards Grid - 6 cards responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 20
              }}
            >
              <ScenarioCardBreastCancer
                scenario={scenario}
                isExpanded={expandedScenario === scenario.id}
                onToggleExpand={() => handleScenarioExpand(scenario.id)}
              />
            </motion.div>
          ))}
        </div>

        {/* Key Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 p-6 border border-border rounded-lg bg-card/50"
        >
          <h3 className="text-lg font-bold mb-3">Key Insights</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {breastCancerKeyInsights.map((insight, index) => (
              <li key={index} className="flex items-start">
                <span className={`mr-2 ${
                  insight.type === 'success' ? 'text-green-400' :
                  insight.type === 'warning' ? 'text-amber-400' :
                  insight.type === 'info' ? 'text-blue-400' :
                  'text-muted-foreground'
                }`}>•</span>
                <span dangerouslySetInnerHTML={{ __html: insight.text }} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Sticky Chat Interface */}
      <ChatInterface
        onQuerySubmit={handleNewQuery}
        suggestedFollowUps={breastCancerFollowUpQueries.general}
      />

      {/* Modals */}
      <EvidenceModal
        isOpen={showEvidenceModal}
        onClose={() => setShowEvidenceModal(false)}
        useCase="breast-cancer"
      />

      <RecommendationModal
        isOpen={showRecommendationModal}
        onClose={() => setShowRecommendationModal(false)}
        patientData={patientData}
        useCase="breast-cancer"
      />
    </motion.div>
  );
}
