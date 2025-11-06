import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import MechanismFlowDiagram from '@/components/results/MechanismFlowDiagram';
import CorrelationChart from '@/components/results/CorrelationChart';
import ChatInterface from '@/components/comparison/ChatInterface';
import ComparisonHeader from '@/components/comparison/ComparisonHeader';
import EvidenceModal from '@/components/modals/EvidenceModal';
import { mechanismData } from '@/lib/mechanism-data';

// Follow-up queries specific to mechanism explanation
const mechanismFollowUpQueries = [
  "What's the best intervention for rising LDL?",
  "Should I prescribe a statin?",
  "Compare HRT versus statin for this patient",
  "What's her cardiovascular risk?"
];

export default function MechanismExplanation({
  query,
  patientName,
  patientData,
  onBackToOverview,
  onNewQuery
}) {
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);

  const handleShowEvidence = () => {
    setShowEvidenceModal(true);
  };

  const handleGenerateRecommendation = () => {
    // Navigate to comprehensive comparison query
    onNewQuery("What's the best intervention for rising LDL?");
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">

        {/* Root Cause Identification - Amber Alert Banner Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 shadow-sm border border-amber-200 dark:border-amber-900"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 dark:bg-amber-900/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100/50 dark:bg-orange-900/10 rounded-full translate-y-12 -translate-x-12" />
          <div className="relative flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1 pt-1">
              <h2 className="font-bold text-amber-900 dark:text-amber-100 text-xl mb-2">
                Root Cause: Perimenopause-Related Estrogen Deficiency
              </h2>
              <p className="text-base text-amber-800 dark:text-amber-200 leading-relaxed">
                {mechanismData.rootCause.explanation}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-sm text-amber-700 dark:text-amber-300">Confidence</div>
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400">
                {mechanismData.cohortData.confidenceLevel}%
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Column - Mechanism Pathway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Biological Mechanism</CardTitle>
              </CardHeader>
              <CardContent>
                <MechanismFlowDiagram steps={mechanismData.mechanismSteps} />
              </CardContent>
            </Card>

            {/* Correlation Strength Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Correlation Analysis
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      r = {mechanismData.rootCause.correlationStrength}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      p {mechanismData.rootCause.pValue}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {mechanismData.rootCause.significance}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Data & Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Correlation Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Temporal Correlation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CorrelationChart data={mechanismData.correlationChartData} />
              </CardContent>
            </Card>

            {/* Cohort Validation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-primary" />
                  Cohort Validation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-foreground">
                      {mechanismData.cohortData.similarCases.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">Similar cases analyzed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {mechanismData.cohortData.patternMatch}%
                    </div>
                    <div className="text-xs text-muted-foreground">Pattern match rate</div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Demographics</span>
                    <span className="font-medium">
                      Age {mechanismData.cohortData.ageRange}, {mechanismData.cohortData.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg LDL increase</span>
                    <span className="font-medium">
                      {mechanismData.cohortData.avgLDLIncrease} {mechanismData.cohortData.avgLDLIncreaseUnit}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Key Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3">Consistent Pattern Observed</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">•</span>
                      <span>
                        Strong <strong className="text-foreground">inverse correlation</strong> between estradiol and LDL levels (r = -0.92)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">•</span>
                      <span>
                        Pattern validated in <strong className="text-foreground">2,347 similar cases</strong> with 78% match rate
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">•</span>
                      <span>
                        <strong className="text-foreground">No lifestyle changes</strong> detected (diet, exercise, weight stable)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-3">Clinical Implications</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2 mt-0.5">•</span>
                      <span>
                        Traditional <strong className="text-foreground">statin therapy treats symptom</strong> but not hormonal root cause
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">•</span>
                      <span>
                        <strong className="text-foreground">HRT addresses root cause</strong> by restoring estrogen and normalizing LDL receptor function
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">•</span>
                      <span>
                        HRT provides <strong className="text-foreground">multi-system benefits</strong>: symptom relief, bone protection, cognitive support
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Sticky Chat Interface with Follow-up Questions */}
      <ChatInterface
        onQuerySubmit={onNewQuery}
        suggestedFollowUps={mechanismFollowUpQueries}
      />

      {/* Evidence Modal */}
      <EvidenceModal
        isOpen={showEvidenceModal}
        onClose={() => setShowEvidenceModal(false)}
      />
    </motion.div>
  );
}
