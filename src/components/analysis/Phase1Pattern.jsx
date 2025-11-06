import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  patternRecognitionData,
  breastCancerPatternRecognitionData
} from '@/lib/animation-data';
import { ANIMATION_CONFIG } from '@/lib/animation-config';

export default function Phase1Pattern({ useCase = 'cardiovascular' }) {
  // Select data based on use case
  const data = useCase === 'breast-cancer'
    ? breastCancerPatternRecognitionData
    : patternRecognitionData;

  const {
    hotFlashesTrend,
    breastCancerRiskTrend,
    ldlTrend,
    estradiolTrend,
    correlation
  } = data;

  // For breast cancer, use different metrics
  const leftChartData = useCase === 'breast-cancer' ? hotFlashesTrend : ldlTrend;
  const rightChartData = useCase === 'breast-cancer' ? breastCancerRiskTrend : estradiolTrend;

  const leftChartLabel = useCase === 'breast-cancer' ? 'Hot Flashes/Day' : 'LDL Cholesterol';
  const rightChartLabel = useCase === 'breast-cancer' ? '5-Yr BC Risk (%)' : 'Estradiol';

  const leftChartDomain = useCase === 'breast-cancer' ? [0, 25] : [130, 190];
  const rightChartDomain = useCase === 'breast-cancer' ? [0, 20] : [0, 50];

  const correlationText = useCase === 'breast-cancer'
    ? correlation.message || 'Safety constraint detected: High breast cancer risk limits HRT options'
    : 'Correlation detected: Cholesterol ↑ as Estradiol ↓';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center h-full"
    >
      {/* Charts Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
        {/* Left Chart (LDL or Hot Flashes) */}
        <div className="w-full md:w-48">
          <p className="text-xs text-muted-foreground mb-2 text-center">{leftChartLabel}</p>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={leftChartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(0.922 0 0)"
              />
              <XAxis
                dataKey="month"
                tick={{ fill: 'oklch(0.556 0 0)', fontSize: 10 }}
                stroke="oklch(0.556 0 0)"
              />
              <YAxis
                domain={leftChartDomain}
                tick={{ fill: 'oklch(0.556 0 0)', fontSize: 10 }}
                stroke="oklch(0.556 0 0)"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="oklch(0.646 0.222 41.116)"
                strokeWidth={3}
                dot={{ fill: 'oklch(0.646 0.222 41.116)', r: 4 }}
                activeDot={{ r: 6 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Correlation Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-2xl text-muted-foreground hidden md:block"
        >
          {useCase === 'breast-cancer' ? '⚠️' : '⟷'}
        </motion.div>

        {/* Right Chart (Estradiol or BC Risk) */}
        <div className="w-full md:w-48">
          <p className="text-xs text-muted-foreground mb-2 text-center">{rightChartLabel}</p>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={rightChartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="oklch(0.922 0 0)"
              />
              <XAxis
                dataKey="month"
                tick={{ fill: 'oklch(0.556 0 0)', fontSize: 10 }}
                stroke="oklch(0.556 0 0)"
              />
              <YAxis
                domain={rightChartDomain}
                tick={{ fill: 'oklch(0.556 0 0)', fontSize: 10 }}
                stroke="oklch(0.556 0 0)"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={useCase === 'breast-cancer' ? '#ec4899' : 'oklch(0.6 0.118 184.704)'}
                strokeWidth={3}
                dot={{ fill: useCase === 'breast-cancer' ? '#ec4899' : 'oklch(0.6 0.118 184.704)', r: 4 }}
                activeDot={{ r: 6 }}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Text Overlay */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="text-sm text-muted-foreground mt-6 text-center"
      >
        {correlationText}
      </motion.p>

      {/* Completion Indicator */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.9,
          type: 'spring',
          stiffness: ANIMATION_CONFIG.SPRING_STIFFNESS,
          damping: ANIMATION_CONFIG.SPRING_DAMPING
        }}
        className="absolute top-4 right-4"
      >
        <Sparkles className="w-5 h-5" style={{ color: '#f59e0b' }} />
      </motion.div>
    </motion.div>
  );
}
