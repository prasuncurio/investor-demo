import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircleCheckBig } from 'lucide-react';
import { evidenceSynthesisData } from '@/lib/animation-data';
import { ANIMATION_CONFIG } from '@/lib/animation-config';

export default function Phase3Evidence() {
  const { cohort, confidence } = evidenceSynthesisData;
  const [count, setCount] = useState(0);
  const [currentConfidence, setCurrentConfidence] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Animate counter
  useEffect(() => {
    const startTime = Date.now();
    const duration = ANIMATION_CONFIG.COUNTER_ANIMATION_DURATION;
    const targetCount = cohort.totalCases;

    function updateCounter() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * targetCount);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }, [cohort.totalCases]);

  // Update confidence in steps
  useEffect(() => {
    const timers = confidence.steps.map((step) =>
      setTimeout(() => setCurrentConfidence(step.value), step.timestamp)
    );

    // Show completion icon at end
    const completionTimer = setTimeout(() => {
      setShowCompletion(true);
    }, ANIMATION_CONFIG.COMPLETION_ICON_DELAY);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completionTimer);
    };
  }, [confidence.steps]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center h-full space-y-8"
    >
      {!showCompletion ? (
        <>
          {/* Large number counter */}
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: 2, duration: 1.5 }}
            >
              {count.toLocaleString()}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base text-muted-foreground mt-2"
            >
              similar cases analyzed
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-muted-foreground mt-1 opacity-80"
            >
              {cohort.demographics.ageRange} years old, {cohort.demographics.stage}, {cohort.demographics.condition}
            </motion.p>
          </div>

          {/* Confidence percentage */}
          {currentConfidence > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <span className="text-muted-foreground">Confidence:</span>
              <motion.span
                key={currentConfidence}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="text-3xl md:text-4xl font-bold"
                style={{ color: 'hsl(var(--chart-2))' }}
              >
                {currentConfidence}%
              </motion.span>
            </motion.div>
          )}

          {/* Progress dots */}
          {currentConfidence > 0 && (
            <div className="flex gap-3">
              {confidence.steps.map((step, index) => (
                <motion.div
                  key={step.value}
                  initial={{ scale: 0.8, backgroundColor: 'hsl(var(--border))' }}
                  animate={{
                    scale: currentConfidence >= step.value ? 1 : 0.8,
                    backgroundColor: currentConfidence >= step.value
                      ? 'hsl(var(--chart-1))'
                      : 'hsl(var(--border))'
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-2 h-2 rounded-full"
                />
              ))}
            </div>
          )}

          {/* Status text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            Cross-referencing clinical guidelines...
          </motion.p>
        </>
      ) : (
        /* Completion icon */
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 360, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: ANIMATION_CONFIG.SPRING_STIFFNESS,
            damping: ANIMATION_CONFIG.SPRING_DAMPING,
            mass: ANIMATION_CONFIG.SPRING_MASS
          }}
        >
          <CircleCheckBig
            className="w-12 h-12 md:w-16 md:h-16"
            style={{
              color: 'hsl(var(--chart-2))',
              filter: 'drop-shadow(0 0 20px hsl(var(--chart-2) / 0.5))'
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
