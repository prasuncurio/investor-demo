import { motion } from 'framer-motion';
import MiniLineChart from './MiniLineChart';
import { mechanismAnimationData } from '@/lib/mechanism-animation-data';

export default function Phase1PatternMechanism() {
  const { ldlChartData, estradiolChartData, correlationCoefficient } = mechanismAnimationData;

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
          Pattern Recognition
        </h3>
        <p className="text-sm text-muted-foreground">
          Analyzing temporal biomarker trends
        </p>
      </motion.div>

      {/* Dual Chart Display */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <MiniLineChart
            data={ldlChartData}
            label="LDL Cholesterol"
            trend="up"
            width={280}
            height={100}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <MiniLineChart
            data={estradiolChartData}
            label="Estradiol"
            trend="down"
            width={280}
            height={100}
          />
        </motion.div>
      </div>

      {/* Correlation Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
        className="mx-auto max-w-md"
      >
        <div className="p-6 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border border-purple-200 dark:border-purple-800">
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-2">
              Inverse Correlation Detected
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="text-5xl font-bold text-primary mb-1"
            >
              r = {correlationCoefficient}
            </motion.div>
            <div className="text-xs text-muted-foreground">
              Strong inverse relationship
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
