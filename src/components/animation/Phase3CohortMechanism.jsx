import { motion } from 'framer-motion';
import { Users, Target, CheckCircle } from 'lucide-react';
import CountingNumber from './CountingNumber';
import { mechanismAnimationData } from '@/lib/mechanism-animation-data';

export default function Phase3CohortMechanism() {
  const { cohortStats } = mechanismAnimationData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Cohort Validation
        </h3>
        <p className="text-sm text-muted-foreground">
          Verifying pattern against similar cases
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {/* Similar Cases */}
        <motion.div variants={item}>
          <div className="p-6 rounded-lg border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                <CountingNumber
                  end={cohortStats.similarCases}
                  duration={800}
                  delay={0}
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Similar Cases
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pattern Match */}
        <motion.div variants={item}>
          <div className="p-6 rounded-lg border bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                <CountingNumber
                  end={cohortStats.patternMatch}
                  duration={800}
                  delay={150}
                  suffix="%"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Pattern Match
              </div>
            </div>
          </div>
        </motion.div>

        {/* Confidence */}
        <motion.div variants={item}>
          <div className="p-6 rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                <CountingNumber
                  end={cohortStats.confidence}
                  duration={800}
                  delay={300}
                  suffix="%"
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                Confidence
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-sm text-muted-foreground">
          Pattern validated across large cohort with high confidence
        </p>
      </motion.div>
    </motion.div>
  );
}
