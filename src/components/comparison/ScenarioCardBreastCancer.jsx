import { motion } from 'framer-motion';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import MetricDisplay from './MetricDisplay';
import SafetyBadge from './SafetyBadge';

// Color scheme mapping using theme colors
const colorSchemes = {
  gray: {
    border: 'border-border',
    accent: 'text-muted-foreground',
    bg: 'bg-card',
    glow: '',
    indicatorColor: 'oklch(0.556 0 0)' // Muted gray
  },
  blue: {
    border: 'border-[oklch(0.6_0.118_184.704)]',
    accent: 'text-[oklch(0.6_0.118_184.704)]',
    bg: 'bg-card',
    glow: 'shadow-lg shadow-[oklch(0.6_0.118_184.704)]/10',
    indicatorColor: 'oklch(0.6 0.118 184.704)' // Theme chart-2 teal
  },
  purple: {
    border: 'border-[oklch(0.7_0.15_300)]',
    accent: 'text-[oklch(0.7_0.15_300)]',
    bg: 'bg-card',
    glow: 'shadow-lg shadow-[oklch(0.7_0.15_300)]/10',
    indicatorColor: 'oklch(0.7 0.15 300)' // Purple accent
  },
  green: {
    border: 'border-[oklch(0.646_0.222_41.116)]',
    accent: 'text-[oklch(0.646_0.222_41.116)]',
    bg: 'bg-card',
    glow: 'shadow-xl shadow-[oklch(0.646_0.222_41.116)]/20',
    indicatorColor: 'oklch(0.646 0.222 41.116)' // Theme chart-1 orange/red
  },
  red: {
    border: 'border-red-500',
    accent: 'text-red-500',
    bg: 'bg-card',
    glow: 'shadow-lg shadow-red-500/10',
    indicatorColor: 'oklch(0.7 0.2 25)' // Red for contraindicated
  }
};

export default function ScenarioCardBreastCancer({ scenario, isExpanded, onToggleExpand }) {
  const colors = colorSchemes[scenario.colorScheme] || colorSchemes.gray;
  const isRecommended = scenario.isRecommended;
  const isContraindicated = scenario.contraindicated;

  // Prepare metrics for breast cancer use case
  const metrics = [
    {
      type: 'numeric-change',
      label: 'Hot Flashes/Day',
      baseline: scenario.outcomes.hotFlashes.baseline,
      projected: scenario.outcomes.hotFlashes.month12,
      changePercent: scenario.outcomes.hotFlashes.changePercent,
      unit: 'per day',
      isPositive: scenario.outcomes.hotFlashes.changePercent < 0,
      note: scenario.outcomes.hotFlashes.note
    },
    {
      type: 'risk-percentage',
      label: '5-Year BC Risk',
      baseline: scenario.outcomes.breastCancerRisk.baseline,
      projected: scenario.outcomes.breastCancerRisk.month12,
      changePercent: scenario.outcomes.breastCancerRisk.changePercent,
      isStatic: scenario.outcomes.breastCancerRisk.isStatic,
      warning: scenario.outcomes.breastCancerRisk.warning,
      note: scenario.outcomes.breastCancerRisk.note,
      isPositive: scenario.outcomes.breastCancerRisk.changePercent < 0
    },
    {
      type: 'score',
      label: 'Sleep Quality',
      baseline: scenario.outcomes.sleepQuality.baseline,
      projected: scenario.outcomes.sleepQuality.month12,
      changePercent: scenario.outcomes.sleepQuality.changePercent,
      scale: scenario.outcomes.sleepQuality.scale,
      isPositive: scenario.outcomes.sleepQuality.changePercent > 0,
      note: scenario.outcomes.sleepQuality.note
    },
    {
      type: 'score',
      label: 'Quality of Life',
      baseline: scenario.outcomes.qualityOfLife.baseline,
      projected: scenario.outcomes.qualityOfLife.month12,
      changePercent: scenario.outcomes.qualityOfLife.changePercent,
      scale: scenario.outcomes.qualityOfLife.scale,
      isPositive: scenario.outcomes.qualityOfLife.changePercent > 0,
      note: scenario.outcomes.qualityOfLife.note
    },
    {
      type: 'score',
      label: 'Mood Score',
      baseline: scenario.outcomes.mood.baseline,
      projected: scenario.outcomes.mood.month12,
      changePercent: scenario.outcomes.mood.changePercent,
      scale: scenario.outcomes.mood.scale,
      isPositive: scenario.outcomes.mood.changePercent > 0,
      note: scenario.outcomes.mood.note
    }
  ];

  return (
    <motion.div
      whileHover={{ y: isContraindicated ? 0 : -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card
        className={`
          relative overflow-hidden
          bg-card
          ${isRecommended ? 'border-[3px]' : isContraindicated ? 'border-2 border-dashed' : 'border-2'}
          ${colors.border}
          ${isRecommended ? colors.glow : ''}
          ${isContraindicated ? 'opacity-90' : ''}
          transition-all duration-300
          hover:shadow-xl
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className={`text-lg font-bold ${isContraindicated ? 'text-red-500' : ''}`}>
                {scenario.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {scenario.description}
              </p>
            </div>
            {isRecommended && !isContraindicated && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.5 }}
                className={`flex-shrink-0 ${colors.accent}`}
              >
                <Star className="w-6 h-6 fill-current" />
              </motion.div>
            )}
          </div>

          {/* Contraindication Badge */}
          {isContraindicated && scenario.contraindicationReason && (
            <div className="mt-3">
              <SafetyBadge
                message={scenario.contraindicationReason}
                severity="error"
              />
            </div>
          )}

          {/* Confidence Score */}
          {scenario.confidenceScore && (
            <div className="flex items-center gap-2 mt-2">
              <div className={`text-xs font-semibold ${colors.accent}`}>
                {scenario.confidenceScore}% Confidence
              </div>
            </div>
          )}
        </div>

        {/* Metrics Section */}
        <div className="p-4 space-y-4">
          <p className="text-sm font-semibold text-muted-foreground">
            12-Week Outcomes
          </p>

          {/* Dynamic Metrics */}
          {metrics.map((metric, index) => (
            <MetricDisplay
              key={index}
              metric={metric}
              useCase="breast-cancer"
            />
          ))}

          {/* Annual Cost */}
          <div className="pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground mb-1">Annual Cost</p>
            <p className="text-lg font-bold">
              ${scenario.outcomes.annualCost.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Expandable Details Section */}
        {(scenario.benefits.length > 0 || scenario.considerations.length > 0) && (
          <div className="border-t border-border">
            <button
              onClick={onToggleExpand}
              className="w-full p-4 flex items-center justify-between hover:bg-accent/5 transition-colors"
            >
              <span className="text-sm font-medium">
                {isExpanded ? 'Hide Details' : 'View Details'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-4 pb-4 space-y-4"
              >
                {/* Benefits */}
                {scenario.benefits.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-green-400 mb-2">
                      Benefits
                    </p>
                    <ul className="space-y-1">
                      {scenario.benefits.map((benefit, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Considerations */}
                {scenario.considerations.length > 0 && (
                  <div>
                    <p className={`text-xs font-semibold mb-2 ${
                      isContraindicated ? 'text-red-400' : 'text-amber-400'
                    }`}>
                      {isContraindicated ? 'Contraindications' : 'Considerations'}
                    </p>
                    <ul className="space-y-1">
                      {scenario.considerations.map((consideration, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <span className={isContraindicated ? 'text-red-400 mr-2' : 'text-amber-400 mr-2'}>•</span>
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        )}
      </Card>
    </motion.div>
  );
}
