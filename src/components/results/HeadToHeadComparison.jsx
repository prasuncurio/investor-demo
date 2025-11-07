import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Scale,
  Trophy,
  BarChart3,
  CheckCircle,
  XCircle,
  Target,
  ArrowLeftRight,
  Lightbulb,
  AlertTriangle
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ComparisonHeader from '@/components/comparison/ComparisonHeader';
import ChatInterface from '@/components/comparison/ChatInterface';
import EvidenceModal from '@/components/modals/EvidenceModal';
import RecommendationModal from '@/components/modals/RecommendationModal';
import SpiderChartComparison from '@/components/results/SpiderChartComparison';
import { headToHeadData, headToHeadFollowUpQueries } from '@/lib/head-to-head-data';

export default function HeadToHeadComparison({
  query,
  patientName,
  patientData,
  onBackToOverview,
  onNewQuery
}) {
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [showRecommendationModal, setShowRecommendationModal] = useState(false);

  // Helper function to render icon based on type
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'check':
        return <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 inline mr-1 flex-shrink-0" />;
      case 'x':
        return <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 inline mr-1 flex-shrink-0" />;
      case 'alert':
        return <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 inline mr-1 flex-shrink-0" />;
      default:
        return null;
    }
  };

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
        {/* 1. Scorecard Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 via-purple-50 to-amber-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-amber-950/20 p-6 shadow-sm border border-purple-200 dark:border-purple-800"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 dark:bg-purple-900/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100/50 dark:bg-blue-900/10 rounded-full translate-y-12 -translate-x-12" />

          {/* Content */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 text-lg">
                SCORECARD
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Statin Score */}
              <div className="p-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-center">
                <div className="text-sm text-blue-700 dark:text-blue-300 mb-1">Statin</div>
                <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                  {headToHeadData.scorecard.statin.wins}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400">categories</div>
              </div>

              {/* HRT Score */}
              <div className="p-4 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-center">
                <div className="text-sm text-amber-700 dark:text-amber-300 mb-1">HRT + Lifestyle</div>
                <div className="text-3xl font-bold text-amber-900 dark:text-amber-100">
                  {headToHeadData.scorecard.hrt.wins}
                </div>
                <div className="text-xs text-amber-600 dark:text-amber-400">categories</div>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground mb-3">
              {headToHeadData.scorecard.ties > 0 && (
                <>Ties: {headToHeadData.scorecard.ties} {headToHeadData.scorecard.ties === 1 ? 'category' : 'categories'}</>
              )}
            </div>

            <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-2">
                <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-foreground">
                  {headToHeadData.scorecard.winner}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Comprehensive Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Scale className="w-6 h-6 text-primary" />
                Head-to-Head Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold text-sm">Metric</th>
                      <th className="text-left p-3 font-semibold text-sm text-blue-600 dark:text-blue-400">
                        Statin 20mg
                      </th>
                      <th className="text-left p-3 font-semibold text-sm text-amber-600 dark:text-amber-400">
                        HRT + Lifestyle
                      </th>
                      <th className="text-center p-3 font-semibold text-sm">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {headToHeadData.comparisonTable.map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-3">
                          <div className="font-semibold text-sm">{row.metric}</div>
                        </td>
                        <td className="p-3">
                          <div className="text-sm space-y-1">
                            {row.statin.map((line, i) => (
                              <div key={i} className={line.highlight ? 'font-medium' : 'text-muted-foreground'}>
                                {line.iconType && renderIcon(line.iconType)}
                                {line.text}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="text-sm space-y-1">
                            {row.hrt.map((line, i) => (
                              <div key={i} className={line.highlight ? 'font-medium' : 'text-muted-foreground'}>
                                {line.iconType && renderIcon(line.iconType)}
                                {line.text}
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          {row.winner === 'statin' && (
                            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400 inline" />
                          )}
                          {row.winner === 'hrt' && (
                            <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400 inline" />
                          )}
                          {row.winner === 'tie' && (
                            <span className="text-xs text-muted-foreground">≈ Tie</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 3. Spider Chart Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SpiderChartComparison data={headToHeadData.spiderChart} />
        </motion.div>

        {/* 4. Trade-Off Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ArrowLeftRight className="w-5 h-5 text-primary" />
                What You Gain vs What You Give Up
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Statin Choice */}
              <div className="p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
                <h4 className="font-semibold text-base mb-4 text-blue-900 dark:text-blue-100">
                  IF YOU CHOOSE STATIN:
                </h4>

                <div className="space-y-4">
                  {/* Gains */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500" />
                      <span className="font-semibold text-sm">YOU GAIN:</span>
                    </div>
                    <ul className="space-y-2 ml-1">
                      {headToHeadData.tradeoffs.statin.gains.map((gain, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{gain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Give Ups */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-500" />
                      <span className="font-semibold text-sm">YOU GIVE UP:</span>
                    </div>
                    <ul className="space-y-2 ml-1">
                      {headToHeadData.tradeoffs.statin.giveUps.map((giveUp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{giveUp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* HRT Choice */}
              <div className="p-4 rounded-lg border-2 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <h4 className="font-semibold text-base mb-4 text-amber-900 dark:text-amber-100">
                  IF YOU CHOOSE HRT + LIFESTYLE:
                </h4>

                <div className="space-y-4">
                  {/* Gains */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500" />
                      <span className="font-semibold text-sm">YOU GAIN:</span>
                    </div>
                    <ul className="space-y-2 ml-1">
                      {headToHeadData.tradeoffs.hrt.gains.map((gain, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{gain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Give Ups */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-500" />
                      <span className="font-semibold text-sm">YOU GIVE UP:</span>
                    </div>
                    <ul className="space-y-2 ml-1">
                      {headToHeadData.tradeoffs.hrt.giveUps.map((giveUp, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{giveUp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recommendation for Sarah */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-amber-50 to-green-50 dark:from-amber-950/20 dark:to-green-950/20 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-base mb-2 text-amber-900 dark:text-amber-100">
                      FOR SARAH SPECIFICALLY:
                    </h4>
                    <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                      {headToHeadData.patientSpecificRecommendation.reasoning}
                    </p>
                    <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
                      {headToHeadData.patientSpecificRecommendation.reasons.map((reason, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sticky Chat Interface */}
      <ChatInterface
        onQuerySubmit={onNewQuery}
        suggestedFollowUps={headToHeadFollowUpQueries}
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
