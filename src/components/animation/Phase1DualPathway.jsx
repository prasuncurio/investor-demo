import { motion } from 'framer-motion';
import { Heart, Bone, Brain, Activity, TrendingDown } from 'lucide-react';

export default function Phase1DualPathway() {
  const systems = {
    hrt: [
      { icon: Heart, label: 'Cardiovascular', color: 'amber' },
      { icon: Bone, label: 'Bone Health', color: 'amber' },
      { icon: Brain, label: 'Cognitive', color: 'amber' },
      { icon: Activity, label: 'Symptoms', color: 'amber' }
    ],
    statin: [
      { icon: Heart, label: 'Cardiovascular', color: 'blue' },
      { icon: TrendingDown, label: 'LDL Reduction', color: 'blue' }
    ]
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
          Dual Pathway Simulation
        </h3>
        <p className="text-sm text-muted-foreground">
          Running parallel simulations
        </p>
      </motion.div>

      {/* Split Screen Visualization */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* HRT Path */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800">
              <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                HRT Effects
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {systems.hrt.map((system, index) => {
              const Icon = system.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800"
                >
                  <Icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                    {system.label}
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.15, type: "spring" }}
                    className="ml-auto"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Statin Path */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                Statin Effects
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {systems.statin.map((system, index) => {
              const Icon = system.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800"
                >
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    {system.label}
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.15, type: "spring" }}
                    className="ml-auto"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
