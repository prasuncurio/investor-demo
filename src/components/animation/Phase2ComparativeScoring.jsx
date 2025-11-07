import { motion } from 'framer-motion';
import { CheckCircle, Trophy } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Phase2ComparativeScoring() {
  const [scoredCategories, setScoredCategories] = useState([]);
  const [showTally, setShowTally] = useState(false);

  const categories = [
    { name: 'Efficacy', winner: 'statin', delay: 0 },
    { name: 'Safety', winner: 'tie', delay: 200 },
    { name: 'QoL', winner: 'hrt', delay: 400 },
    { name: 'Cost', winner: 'statin', delay: 600 },
    { name: 'Multi-system', winner: 'hrt', delay: 800 }
  ];

  useEffect(() => {
    categories.forEach(cat => {
      setTimeout(() => {
        setScoredCategories(prev => [...prev, cat.name]);
      }, cat.delay);
    });

    setTimeout(() => {
      setShowTally(true);
    }, 1600);
  }, []);

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
          Comparative Analysis
        </h3>
        <p className="text-sm text-muted-foreground">
          Scoring tradeoffs
        </p>
      </motion.div>

      {/* Scoring Grid */}
      <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
        {categories.map((cat, index) => {
          const isScored = scoredCategories.includes(cat.name);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: cat.delay / 1000 }}
              className="text-center"
            >
              <div className="mb-2 text-xs font-medium text-muted-foreground">
                {cat.name}
              </div>
              <div className={`w-12 h-12 mx-auto rounded-lg border-2 flex items-center justify-center ${
                isScored
                  ? cat.winner === 'hrt'
                    ? 'bg-amber-100 dark:bg-amber-900/30 border-amber-500'
                    : cat.winner === 'statin'
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500'
                    : 'bg-gray-100 dark:bg-gray-900/30 border-gray-500'
                  : 'border-border'
              }`}>
                {isScored && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <CheckCircle className={`w-6 h-6 ${
                      cat.winner === 'hrt'
                        ? 'text-amber-600'
                        : cat.winner === 'statin'
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    }`} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Final Tally */}
      {showTally && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-amber-100 dark:from-blue-950/30 dark:to-amber-950/30 border border-primary">
            <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span className="text-sm font-semibold text-foreground">
              Analysis Complete
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
