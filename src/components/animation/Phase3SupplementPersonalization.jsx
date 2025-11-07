import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, TrendingUp } from 'lucide-react';

export default function Phase3SupplementPersonalization() {
  const [checkedFactors, setCheckedFactors] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const patientFactors = [
    {
      id: 'bc-risk',
      text: 'High BC risk → Non-hormonal only',
      delay: 0.3
    },
    {
      id: 'symptoms',
      text: 'Moderate symptoms → Relizen match',
      delay: 0.5
    },
    {
      id: 'contraindications',
      text: 'No contraindications',
      delay: 0.7
    }
  ];

  useEffect(() => {
    patientFactors.forEach((factor) => {
      setTimeout(() => {
        setCheckedFactors(prev => [...prev, factor.id]);
      }, factor.delay * 1000);
    });

    setTimeout(() => {
      setShowRecommendation(true);
    }, 900);
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
        <div className="flex items-center justify-center gap-2 mb-2">
          <Target className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">
            Personalized Matching
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Matching to patient profile
        </p>
      </motion.div>

      {/* Patient Factors */}
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <div className="text-sm font-medium text-muted-foreground text-center">
            Patient Factors:
          </div>
        </motion.div>

        <div className="space-y-3 mb-8">
          {patientFactors.map((factor) => {
            const isChecked = checkedFactors.includes(factor.id);

            return (
              <motion.div
                key={factor.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: factor.delay }}
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isChecked ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                </motion.div>
                <span className="text-sm text-foreground">
                  {factor.text}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Best Match Recommendation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={showRecommendation ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-lg blur-xl" />

          <div className="relative p-6 rounded-lg bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-green-950/20 border-2 border-green-200 dark:border-green-800">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="text-lg font-bold text-green-900 dark:text-green-100">
                BEST MATCH
              </span>
            </div>

            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-1">
                Relizen
              </div>
              <div className="text-sm text-green-700 dark:text-green-300">
                Swedish Pollen Extract
              </div>
            </div>

            {/* Confidence Meter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-green-700 dark:text-green-300">Confidence:</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={showRecommendation ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="font-bold text-green-900 dark:text-green-100"
                >
                  82%
                </motion.span>
              </div>
              <div className="h-2 bg-green-200 dark:bg-green-900/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={showRecommendation ? { width: '82%' } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                />
              </div>
            </div>

            {/* Checkmark animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={showRecommendation ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -top-3 -right-3"
            >
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
