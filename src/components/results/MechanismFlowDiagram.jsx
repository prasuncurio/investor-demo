import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function MechanismFlowDiagram({ steps }) {
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-950/30',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-900 dark:text-blue-100'
      },
      red: {
        bg: 'bg-red-50 dark:bg-red-950/30',
        border: 'border-red-200 dark:border-red-800',
        text: 'text-red-900 dark:text-red-100'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-950/30',
        border: 'border-orange-200 dark:border-orange-800',
        text: 'text-orange-900 dark:text-orange-100'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-950/30',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-900 dark:text-green-100'
      }
    };
    return colorMap[color] || {
      bg: 'bg-muted',
      border: 'border-border',
      text: 'text-foreground'
    };
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-3"
    >
      {steps.map((step, index) => {
        const colors = getColorClasses(step.color);

        return (
          <div key={step.step}>
            <motion.div variants={item}>
              {/* Step Card - Simplified */}
              <div className={`
                p-4 rounded-lg border
                ${colors.bg} ${colors.border}
                transition-all hover:shadow-sm
              `}>
                <div className="flex items-center gap-3">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${colors.text}`}>
                      {step.label}
                      {step.value && (
                        <span className="ml-2 font-mono text-xs">
                          {step.value}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {step.description}
                    </div>
                  </div>

                  {/* Change Badge */}
                  {step.change && (
                    <div className={`
                      flex-shrink-0 px-2 py-1 rounded text-xs font-semibold
                      ${step.change > 0
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }
                    `}>
                      {step.change > 0 ? '+' : ''}{step.change}%
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
              </div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
