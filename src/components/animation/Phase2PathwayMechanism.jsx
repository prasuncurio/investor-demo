import { motion } from 'framer-motion';
import { ArrowDown, Calendar, TrendingDown, TrendingUp } from 'lucide-react';
import { mechanismAnimationData } from '@/lib/mechanism-animation-data';

export default function Phase2PathwayMechanism() {
  const { mechanismSteps } = mechanismAnimationData;

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
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const getIcon = (iconName) => {
    const iconMap = {
      'calendar': Calendar,
      'trending-down': TrendingDown,
      'trending-up': TrendingUp
    };
    const IconComponent = iconMap[iconName] || Calendar;
    return <IconComponent className="w-4 h-4" />;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
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
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Pathway Analysis
        </h3>
        <p className="text-sm text-muted-foreground">
          Tracing biological mechanism
        </p>
      </motion.div>

      {/* Mechanism Flow */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-xl mx-auto space-y-3"
      >
        {mechanismSteps.map((step, index) => {
          const colors = getColorClasses(step.color);

          return (
            <div key={step.step}>
              <motion.div variants={item}>
                <div className={`
                  p-4 rounded-lg border
                  ${colors.bg} ${colors.border}
                  transition-all hover:shadow-sm
                `}>
                  <div className="flex items-center gap-3">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`flex-shrink-0 ${colors.text}`}>
                      {getIcon(step.icon)}
                    </div>

                    {/* Label */}
                    <div className="flex-1">
                      <div className={`font-semibold text-base ${colors.text}`}>
                        {step.label}
                      </div>
                    </div>

                    {/* Value Badge */}
                    {step.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`
                          flex-shrink-0 px-3 py-1 rounded-full text-sm font-bold
                          ${step.value.startsWith('+')
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }
                        `}
                      >
                        {step.value}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {index < mechanismSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 + (index * 0.25) }}
                  className="flex justify-center py-1"
                >
                  <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
