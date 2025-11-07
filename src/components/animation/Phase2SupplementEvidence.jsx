import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Microscope, BarChart3 } from 'lucide-react';

export default function Phase2SupplementEvidence() {
  const [filledBars, setFilledBars] = useState([]);

  const supplements = [
    {
      id: 'relizen',
      name: 'Relizen',
      subtitle: 'Swedish Pollen Extract',
      metrics: [
        { label: 'RCT Quality', value: 82, color: 'green' },
        { label: 'Sample Size', value: 70, color: 'green' },
        { label: 'Effect Size', value: 95, color: 'green' }
      ],
      delay: 0.3
    },
    {
      id: 'black-cohosh',
      name: 'Black Cohosh',
      subtitle: 'Cimicifuga racemosa',
      metrics: [
        { label: 'RCT Quality', value: 50, color: 'amber' },
        { label: 'Sample Size', value: 75, color: 'green' },
        { label: 'Effect Size', value: 30, color: 'red' }
      ],
      delay: 0.6
    },
    {
      id: 'soy',
      name: 'Soy Isoflavones',
      subtitle: 'Genistein, Daidzein',
      metrics: [
        { label: 'RCT Quality', value: 60, color: 'amber' },
        { label: 'Sample Size', value: 85, color: 'green' },
        { label: 'Effect Size', value: 25, color: 'red' }
      ],
      delay: 0.9
    }
  ];

  useEffect(() => {
    supplements.forEach((supplement, suppIndex) => {
      supplement.metrics.forEach((metric, metricIndex) => {
        setTimeout(() => {
          setFilledBars(prev => [...prev, `${supplement.id}-${metricIndex}`]);
        }, (supplement.delay + metricIndex * 0.15) * 1000);
      });
    });
  }, []);

  const getBarColor = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-500';
      case 'amber':
        return 'bg-amber-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getBackgroundColor = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 dark:bg-green-950/20';
      case 'amber':
        return 'bg-amber-100 dark:bg-amber-950/20';
      case 'red':
        return 'bg-red-100 dark:bg-red-950/20';
      default:
        return 'bg-gray-100 dark:bg-gray-950/20';
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
        <div className="flex items-center justify-center gap-2 mb-2">
          <Microscope className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">
            Evidence Synthesis
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Analyzing trial data
        </p>
      </motion.div>

      {/* Evidence Bars */}
      <div className="max-w-3xl mx-auto space-y-6">
        {supplements.map((supplement, suppIndex) => (
          <motion.div
            key={supplement.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: supplement.delay }}
            className="p-4 rounded-lg bg-card border border-border"
          >
            {/* Supplement Name */}
            <div className="mb-3">
              <div className="text-sm font-semibold text-foreground">
                {supplement.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {supplement.subtitle}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-2">
              {supplement.metrics.map((metric, metricIndex) => {
                const barKey = `${supplement.id}-${metricIndex}`;
                const isFilled = filledBars.includes(barKey);

                return (
                  <div key={metricIndex} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{metric.label}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isFilled ? { opacity: 1 } : {}}
                        className={`font-medium ${
                          metric.color === 'green'
                            ? 'text-green-600 dark:text-green-400'
                            : metric.color === 'amber'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}
                      >
                        {isFilled && `${metric.value}%`}
                      </motion.span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${getBackgroundColor(metric.color)}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isFilled ? { width: `${metric.value}%` } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`h-full ${getBarColor(metric.color)} rounded-full`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex items-center justify-center gap-6 text-xs text-muted-foreground"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span>Strong</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <span>Moderate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span>Weak</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
