import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  XCircle,
  CheckCircle,
  AlertTriangle,
  Microscope,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ComparisonHeader from '@/components/comparison/ComparisonHeader';
import ChatInterface from '@/components/comparison/ChatInterface';
import EvidenceModal from '@/components/modals/EvidenceModal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import DecisionTreeDiagram from '@/components/results/DecisionTreeDiagram';
import { binaryDecisionData, binaryDecisionFollowUpQueries } from '@/lib/binary-decision-data';

export default function BinaryDecision({
  query,
  patientName,
  patientData,
  onBackToOverview,
  onNewQuery
}) {
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showRecommendationModal, setShowRecommendationModal] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <ComparisonHeader
        query={query}
        patientName={patientName}
        onBack={onBackToOverview}
        onShowEvidence={() => setShowEvidenceModal(true)}
        onGenerateRecommendation={() => setShowRecommendationModal(true)}
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* 1. Direct Answer Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 shadow-sm border border-amber-200 dark:border-amber-900"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 dark:bg-amber-900/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100/50 dark:bg-orange-900/10 rounded-full translate-y-12 -translate-x-12" />

          {/* Content */}
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1 pt-0.5">
              <h3 className="font-semibold text-amber-900 dark:text-amber-100 text-base mb-1">
                DIRECT ANSWER
              </h3>
              <div className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                {binaryDecisionData.answer.verdict}
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed mb-3">
                {binaryDecisionData.answer.reasoning}
              </p>
              <Badge variant="secondary" className="text-sm">
                Confidence: {binaryDecisionData.answer.confidence}%
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* 2. Why Not Statin First? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                Why Not Statin First?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {binaryDecisionData.whyNotStatin.map((reason) => (
                <div key={reason.number}>
                  <div className="font-semibold text-base text-foreground mb-2">
                    {reason.number}. {reason.title}
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    {reason.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-400 mr-2 mt-0.5">•</span>
                        <span dangerouslySetInnerHTML={{
                          __html: detail.replace(/estrogen deficiency/g, '<strong class="text-foreground">estrogen deficiency</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* 3. Better Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                Better Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-primary mb-4">
                Start with {binaryDecisionData.betterApproach.treatment}
              </div>
              <div className="space-y-3">
                <div className="text-sm font-semibold text-muted-foreground">
                  Expected outcomes (12 months):
                </div>
                <ul className="space-y-2">
                  {binaryDecisionData.betterApproach.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>
                        <strong>{outcome.metric}:</strong> {outcome.change}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      {binaryDecisionData.betterApproach.followUp}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 4. Evidence Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Microscope className="w-5 h-5 text-primary" />
                </div>
                Evidence Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">
                Cohort data (n={binaryDecisionData.evidenceComparison.cohortSize.toLocaleString()}):
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {/* HRT First */}
                <div className="p-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                  <div className="font-semibold text-sm mb-3 text-green-900 dark:text-green-100">
                    Women who started HRT first:
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span>{binaryDecisionData.evidenceComparison.hrtFirst.successRate} success rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span>Average LDL reduction: {binaryDecisionData.evidenceComparison.hrtFirst.avgLDLReduction}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span>{binaryDecisionData.evidenceComparison.hrtFirst.statinAdditionRate} required statin addition</span>
                    </li>
                  </ul>
                </div>

                {/* Statin Only */}
                <div className="p-4 rounded-lg border border-border bg-muted/30">
                  <div className="font-semibold text-sm mb-3">
                    Women who started statin only:
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>Average LDL reduction: {binaryDecisionData.evidenceComparison.statinOnly.avgLDLReduction}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>{binaryDecisionData.evidenceComparison.statinOnly.symptomaticRate}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5">•</span>
                      <span>{binaryDecisionData.evidenceComparison.statinOnly.hrtRequestRate}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 5. When Statin Would Be Appropriate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                When Statin Would Be Appropriate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {binaryDecisionData.statinAppropriate.map((scenario, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 mt-0.5">•</span>
                    <span className="text-muted-foreground">{scenario}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* 6. Decision Tree Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <DecisionTreeDiagram data={binaryDecisionData.decisionTree} />
        </motion.div>
      </div>

      {/* Sticky Chat Interface */}
      <ChatInterface
        onQuerySubmit={onNewQuery}
        suggestedFollowUps={binaryDecisionFollowUpQueries}
      />

      {/* Modals */}
      <EvidenceModal
        isOpen={showEvidenceModal}
        onClose={() => setShowEvidenceModal(false)}
        patientData={patientData}
      />

      <RecommendationModal
        isOpen={showRecommendationModal}
        onClose={() => setShowRecommendationModal(false)}
        patientData={patientData}
      />
    </div>
  );
}
