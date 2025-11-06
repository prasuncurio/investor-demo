import { motion } from 'framer-motion';
import { Scale, TrendingUp, TrendingDown } from 'lucide-react';

export default function Phase1RiskBenefitBinary() {
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
          Risk-Benefit Analysis
        </h3>
        <p className="text-sm text-muted-foreground">
          Modeling statin vs alternatives
        </p>
      </motion.div>

      {/* Balance Scale Visualization */}
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md">
          {/* Scale base */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-end justify-center gap-8"
          >
            {/* Left side - Statin */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 20 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: "easeInOut"
              }}
              className="flex-1 text-center"
            >
              <div className="mb-2 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <div className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Statin Approach
                </div>
                <div className="space-y-1 text-xs text-blue-700 dark:text-blue-300">
                  <div className="flex items-center justify-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    <span>LDL reduction</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    <span>CV risk</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center - Scale */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="flex-shrink-0"
            >
              <Scale className="w-12 h-12 text-primary" />
            </motion.div>

            {/* Right side - HRT */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -20 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                ease: "easeInOut"
              }}
              className="flex-1 text-center"
            >
              <div className="mb-2 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                <div className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  HRT + Lifestyle
                </div>
                <div className="space-y-1 text-xs text-amber-700 dark:text-amber-300">
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Root cause</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Multi-system</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Symptoms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
