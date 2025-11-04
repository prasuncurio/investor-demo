import { motion } from 'framer-motion';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import MetricRow from './MetricRow';

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
  }
};

export default function ScenarioCard({ scenario, isExpanded, onToggleExpand }) {
  const colors = colorSchemes[scenario.colorScheme] || colorSchemes.gray;
  const isRecommended = scenario.isRecommended;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Card
        className={`
          relative overflow-hidden
          bg-card
          ${isRecommended ? 'border-[3px]' : 'border-2'}
          ${colors.border}
          ${isRecommended ? colors.glow : ''}
          transition-all duration-300
          hover:shadow-xl
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold">{scenario.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {scenario.description}
              </p>
            </div>
            {isRecommended && (
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
            12-Month Outcomes
          </p>

          {/* LDL Cholesterol */}
          <MetricRow
            label="LDL Cholesterol"
            baseline={scenario.outcomes.ldl.baseline}
            projected={scenario.outcomes.ldl.month12}
            unit="mg/dL"
            changePercent={Math.abs(scenario.outcomes.ldl.changePercent)}
            showProgressBar={true}
            target={130}
            isPositive={scenario.outcomes.ldl.changePercent < 0}
          />

          {/* HDL Cholesterol */}
          <MetricRow
            label="HDL Cholesterol"
            baseline={scenario.outcomes.hdl.baseline}
            projected={scenario.outcomes.hdl.month12}
            unit="mg/dL"
            changePercent={Math.abs(scenario.outcomes.hdl.changePercent)}
            isPositive={scenario.outcomes.hdl.changePercent > 0}
          />

          {/* Quality of Life */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-medium">Quality of Life</p>
            <div className="flex items-baseline gap-2">
              <div className="flex items-center gap-1">
                <span className="text-lg md:text-xl font-bold">
                  {scenario.outcomes.qualityOfLife.month12}
                </span>
                <span className="text-xs text-muted-foreground">/10</span>
              </div>
              <div className={`flex items-center gap-0.5 text-xs ${
                scenario.outcomes.qualityOfLife.changePercent > 0 ? 'text-green-500' :
                scenario.outcomes.qualityOfLife.changePercent < 0 ? 'text-red-500' :
                'text-muted-foreground'
              }`}>
                <span className="font-medium">
                  {scenario.outcomes.qualityOfLife.changePercent > 0 ? '+' : ''}
                  {scenario.outcomes.qualityOfLife.changePercent}%
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              from {scenario.outcomes.qualityOfLife.baseline}/10
            </p>
          </div>

          {/* Hot Flashes */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">
              Vasomotor Symptoms
            </p>
            <p className="text-sm">
              {scenario.outcomes.vasomotorSymptoms.month12} hot flashes/day
            </p>
            <p className="text-xs text-muted-foreground">
              from {scenario.outcomes.vasomotorSymptoms.baseline}/day
              {scenario.outcomes.vasomotorSymptoms.changePercent && (
                <span className={
                  scenario.outcomes.vasomotorSymptoms.changePercent < 0 ? 'text-green-500 ml-1' : 'text-red-500 ml-1'
                }>
                  ({scenario.outcomes.vasomotorSymptoms.changePercent}%)
                </span>
              )}
            </p>
          </div>

          {/* Bone Density */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">Bone Density</p>
            <p className={`text-sm font-semibold ${
              scenario.outcomes.boneDensity.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
            }`}>
              {scenario.outcomes.boneDensity.change}
            </p>
            <p className="text-xs text-muted-foreground">
              {scenario.outcomes.boneDensity.trend}
            </p>
          </div>

          {/* CV Risk */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground font-medium">
              10-Year CV Risk
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold">
                {scenario.outcomes.cvRisk.month12}
              </span>
              <span className={`text-xs font-medium ${
                scenario.outcomes.cvRisk.changePercent < 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                ({scenario.outcomes.cvRisk.changePercent}%)
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              from {scenario.outcomes.cvRisk.baseline}
            </p>
          </div>

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
                    <p className="text-xs font-semibold text-amber-400 mb-2">
                      Considerations
                    </p>
                    <ul className="space-y-1">
                      {scenario.considerations.map((consideration, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
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
