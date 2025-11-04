import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { patternRecognitionData } from '@/lib/animation-data';
import { ANIMATION_CONFIG } from '@/lib/animation-config';

export default function Phase1Pattern() {
  const { ldlTrend, estradiolTrend } = patternRecognitionData;

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
        {/* LDL Chart */}
        <div className="w-full md:w-48">
          <p className="text-xs text-muted-foreground mb-2 text-center">LDL Cholesterol</p>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={ldlTrend}>
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                domain={[130, 190]}
                tick={{ fontSize: 10 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--chart-5))"
                strokeWidth={3}
                animationDuration={ANIMATION_CONFIG.CHART_ANIMATION_DURATION}
                dot={{ fill: 'hsl(var(--chart-5))', r: 4 }}
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
          ⟷
        </motion.div>

        {/* Estradiol Chart */}
        <div className="w-full md:w-48">
          <p className="text-xs text-muted-foreground mb-2 text-center">Estradiol</p>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={estradiolTrend}>
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                domain={[0, 50]}
                tick={{ fontSize: 10 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--chart-1))"
                strokeWidth={3}
                animationDuration={ANIMATION_CONFIG.CHART_ANIMATION_DURATION}
                dot={{ fill: 'hsl(var(--chart-1))', r: 4 }}
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
        Correlation detected: Cholesterol ↑ as Estradiol ↓
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
        <Sparkles className="w-5 h-5" style={{ color: 'hsl(var(--chart-1))' }} />
      </motion.div>
    </motion.div>
  );
}
