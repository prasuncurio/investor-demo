import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';
import SupplementCard from '@/components/comparison/SupplementCard';
import ChatInterface from '@/components/comparison/ChatInterface';
import ComparisonHeader from '@/components/comparison/ComparisonHeader';
import EvidenceModal from '@/components/modals/EvidenceModal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import { QUERY_TYPES } from '@/lib/query-classifier';
import {
  supplementsData,
  supplementFollowUpQueries,
  supplementKeyInsights,
  patientRecommendation
} from '@/lib/supplement-assessment-data';

export default function SupplementAssessmentResults({
  query,
  patientName,
  patientData,
  onBackToOverview,
  onNewQuery
}) {
  const [expandedSupplement, setExpandedSupplement] = useState(null);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showRecommendationModal, setShowRecommendationModal] = useState(false);

  const supplements = [
    supplementsData['relizen'],
    supplementsData['black-cohosh'],
    supplementsData['soy-isoflavones'],
    supplementsData['not-recommended']
  ];

  const handleSupplementExpand = (supplementId) => {
    setExpandedSupplement(expandedSupplement === supplementId ? null : supplementId);
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
          Supplement Safety Assessment - Non-Prescription Options
        </h2>

        {/* Recommendation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 rounded-lg bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-green-950/20 border-2 border-[oklch(0.646_0.222_41.116)]"
        >
          <div className="flex items-start gap-3">
            <Target className="w-6 h-6 text-[oklch(0.646_0.222_41.116)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                RECOMMENDED: {patientRecommendation.supplement}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {patientRecommendation.reasoning}
              </p>
              <ul className="space-y-1">
                {patientRecommendation.reasons.map((reason, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-white/50 dark:bg-black/20 rounded-md">
                <p className="text-xs text-muted-foreground">
                  <strong>If inadequate response:</strong> {patientRecommendation.alternativeApproach}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supplement Cards Grid - 4 cards responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supplements.map((supplement, index) => (
            <motion.div
              key={supplement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
                damping: 20
              }}
            >
              <SupplementCard
                supplement={supplement}
                isExpanded={expandedSupplement === supplement.id}
                onToggleExpand={() => handleSupplementExpand(supplement.id)}
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
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold">Key Insights</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {supplementKeyInsights.map((insight, index) => (
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

        {/* Clinical Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-6 border border-border rounded-lg bg-card/50"
        >
          <h3 className="text-lg font-bold mb-3">Clinical Context for {patientName}</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="font-semibold text-foreground min-w-[140px]">Baseline Status:</div>
              <div className="text-muted-foreground">
                22 hot flashes/day, severity 8.5/10, high breast cancer risk (14.2% 5-year)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="font-semibold text-foreground min-w-[140px]">Safety Priority:</div>
              <div className="text-muted-foreground">
                Non-hormonal options only due to elevated breast cancer risk and family history
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="font-semibold text-foreground min-w-[140px]">Trial Duration:</div>
              <div className="text-muted-foreground">
                3-month trial recommended; reassess if inadequate response
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="font-semibold text-foreground min-w-[140px]">Next Steps:</div>
              <div className="text-muted-foreground">
                If supplements ineffective, consider prescription options (Fezolinetant, SSRI) with stronger evidence
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky Chat Interface */}
      <ChatInterface
        onQuerySubmit={handleNewQuery}
        suggestedFollowUps={supplementFollowUpQueries}
      />

      {/* Modals */}
      <EvidenceModal
        isOpen={showEvidenceModal}
        onClose={() => setShowEvidenceModal(false)}
        useCase="breast-cancer"
        queryType={QUERY_TYPES.SUPPLEMENT_SAFETY_ASSESSMENT}
      />

      <RecommendationModal
        isOpen={showRecommendationModal}
        onClose={() => setShowRecommendationModal(false)}
        patientData={patientData}
        useCase="breast-cancer"
        queryType={QUERY_TYPES.SUPPLEMENT_SAFETY_ASSESSMENT}
      />
    </motion.div>
  );
}
