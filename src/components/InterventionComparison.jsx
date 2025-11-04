import { useState } from 'react';
import { motion } from 'framer-motion';
import ScenarioCard from '@/components/comparison/ScenarioCard';
import ChatInterface from '@/components/comparison/ChatInterface';
import ComparisonHeader from '@/components/comparison/ComparisonHeader';
import EvidenceModal from '@/components/modals/EvidenceModal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import { interventionScenarios, followUpQueries } from '@/lib/scenarios-data';

export default function InterventionComparison({
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
    interventionScenarios['no-action'],
    interventionScenarios['statin'],
    interventionScenarios['hrt'],
    interventionScenarios['combined']
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Intervention Comparison - 12 Month Projections
        </h2>

        {/* Scenario Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <ScenarioCard
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
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 border border-border rounded-lg bg-card/50"
        >
          <h3 className="text-lg font-bold mb-3">Key Insights</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>
                <strong className="text-foreground">HRT + Lifestyle</strong> provides the best combined outcomes across all metrics with 87% confidence
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>
                Addresses the <strong className="text-foreground">root hormonal cause</strong> rather than just treating symptoms
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>
                Provides <strong className="text-foreground">multi-system benefits</strong>: cardiovascular health, bone density, symptom relief, and quality of life
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              <span>
                While statins offer stronger LDL reduction, they don't address menopausal symptoms or bone health
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Sticky Chat Interface */}
      <ChatInterface
        onQuerySubmit={handleNewQuery}
        suggestedFollowUps={followUpQueries.general}
      />

      {/* Modals */}
      <EvidenceModal
        isOpen={showEvidenceModal}
        onClose={() => setShowEvidenceModal(false)}
      />

      <RecommendationModal
        isOpen={showRecommendationModal}
        onClose={() => setShowRecommendationModal(false)}
        patientData={patientData}
      />
    </motion.div>
  );
}
