import { motion } from 'framer-motion';
import { Star, ChevronDown, ChevronUp, ShieldCheck, AlertTriangle, XCircle } from 'lucide-react';
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
    indicatorColor: 'oklch(0.556 0 0)'
  },
  blue: {
    border: 'border-[oklch(0.6_0.118_184.704)]',
    accent: 'text-[oklch(0.6_0.118_184.704)]',
    bg: 'bg-card',
    glow: 'shadow-lg shadow-[oklch(0.6_0.118_184.704)]/10',
    indicatorColor: 'oklch(0.6 0.118 184.704)'
  },
  green: {
    border: 'border-[oklch(0.646_0.222_41.116)]',
    accent: 'text-[oklch(0.646_0.222_41.116)]',
    bg: 'bg-card',
    glow: 'shadow-xl shadow-[oklch(0.646_0.222_41.116)]/20',
    indicatorColor: 'oklch(0.646 0.222 41.116)'
  },
  red: {
    border: 'border-red-500',
    accent: 'text-red-500',
    bg: 'bg-card',
    glow: 'shadow-lg shadow-red-500/10',
    indicatorColor: 'oklch(0.7 0.2 25)'
  }
};

export default function SupplementCard({ supplement, isExpanded, onToggleExpand }) {
  const colors = colorSchemes[supplement.colorScheme] || colorSchemes.gray;
  const isRecommended = supplement.isRecommended;
  const isContraindicated = supplement.contraindicated;

  // Prepare metrics for supplement assessment
  const metrics = supplement.id !== 'not-recommended' ? [
    {
      type: 'numeric-change',
      label: 'Hot Flashes/Day',
      baseline: supplement.outcomes.hotFlashes.baseline,
      projected: supplement.outcomes.hotFlashes.month12,
      changePercent: supplement.outcomes.hotFlashes.changePercent,
      unit: supplement.outcomes.hotFlashes.unit,
      isPositive: supplement.outcomes.hotFlashes.changePercent < 0,
      note: supplement.outcomes.hotFlashes.note
    },
    supplement.outcomes.severityScore && {
      type: 'score',
      label: 'Symptom Severity',
      baseline: supplement.outcomes.severityScore.baseline,
      projected: supplement.outcomes.severityScore.month12,
      changePercent: supplement.outcomes.severityScore.changePercent,
      scale: supplement.outcomes.severityScore.scale,
      isPositive: supplement.outcomes.severityScore.changePercent < 0,
      note: supplement.outcomes.severityScore.note
    },
    supplement.outcomes.sleepQuality && {
      type: 'score',
      label: 'Sleep Quality',
      baseline: supplement.outcomes.sleepQuality.baseline,
      projected: supplement.outcomes.sleepQuality.month12,
      changePercent: supplement.outcomes.sleepQuality.changePercent,
      scale: supplement.outcomes.sleepQuality.scale,
      isPositive: supplement.outcomes.sleepQuality.changePercent > 0,
      note: supplement.outcomes.sleepQuality.note
    },
    supplement.outcomes.qualityOfLife && {
      type: 'score',
      label: 'Quality of Life',
      baseline: supplement.outcomes.qualityOfLife.baseline,
      projected: supplement.outcomes.qualityOfLife.month12,
      changePercent: supplement.outcomes.qualityOfLife.changePercent,
      scale: supplement.outcomes.qualityOfLife.scale,
      isPositive: supplement.outcomes.qualityOfLife.changePercent > 0,
      note: supplement.outcomes.qualityOfLife.note
    }
  ].filter(Boolean) : [];

  // Render safety badges
  const renderSafetyBadges = () => {
    if (supplement.id === 'not-recommended' || !supplement.safety) return null;

    return (
      <div className="space-y-2 mt-3">
        {supplement.safety.breastCancerRisk && (
          <div className="flex items-start gap-2 text-xs">
            {supplement.safety.breastCancerRisk.status === 'safe' ? (
              <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <div className={`font-semibold ${
                supplement.safety.breastCancerRisk.status === 'safe'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-amber-600 dark:text-amber-400'
              }`}>
                {supplement.safety.breastCancerRisk.message}
              </div>
              <div className="text-muted-foreground text-xs mt-0.5">
                {supplement.safety.breastCancerRisk.detail}
              </div>
            </div>
          </div>
        )}
        {supplement.safety.drugInteractions && supplement.safety.drugInteractions.status !== 'safe' && (
          <div className="flex items-start gap-2 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-amber-600 dark:text-amber-400">
                {supplement.safety.drugInteractions.message}
              </div>
              <div className="text-muted-foreground text-xs mt-0.5">
                {supplement.safety.drugInteractions.detail}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

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
                {supplement.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {supplement.description}
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
          {isContraindicated && supplement.contraindicationReason && (
            <div className="mt-3">
              <SafetyBadge
                message={supplement.contraindicationReason}
                severity="error"
              />
            </div>
          )}

          {/* Confidence Score */}
          {supplement.confidenceScore && (
            <div className="flex items-center gap-2 mt-2">
              <div className={`text-xs font-semibold ${colors.accent}`}>
                {supplement.confidenceScore}% Confidence
              </div>
            </div>
          )}

          {/* Safety Badges */}
          {renderSafetyBadges()}

          {/* Evidence Summary for Non-Recommended */}
          {supplement.id === 'not-recommended' && supplement.supplements && (
            <div className="mt-3 space-y-2">
              {supplement.supplements.map((supp, index) => (
                <div key={index} className="text-xs border-l-2 border-red-500 pl-3 py-1">
                  <div className="font-semibold text-foreground">{supp.name}</div>
                  <div className="text-muted-foreground mt-1">{supp.reason}</div>
                  <div className="text-muted-foreground text-xs mt-1">{supp.evidence}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Metrics Section */}
        {metrics.length > 0 && (
          <div className="p-4 space-y-4">
            <p className="text-sm font-semibold text-muted-foreground">
              3-Month Outcomes
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
                ${supplement.outcomes.annualCost.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        {/* Just annual cost for not-recommended */}
        {supplement.id === 'not-recommended' && (
          <div className="p-4">
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-1">Typical Annual Cost</p>
              <p className="text-lg font-bold">
                ${supplement.outcomes.annualCost.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        {/* Evidence Summary */}
        {supplement.evidence && supplement.id !== 'not-recommended' && (
          <div className="px-4 pb-4 border-t border-border pt-4">
            <p className="text-xs font-semibold text-muted-foreground mb-2">Evidence Base</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">RCTs:</span>
                <span className="ml-1 font-semibold">{supplement.evidence.rctCount}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Quality:</span>
                <span className="ml-1 font-semibold">{supplement.evidence.evidenceQuality}</span>
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              {supplement.evidence.keyFinding}
            </div>
          </div>
        )}

        {/* Expandable Details Section */}
        {(supplement.benefits?.length > 0 || supplement.considerations?.length > 0) && (
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
                {supplement.benefits && supplement.benefits.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-green-400 mb-2">
                      Benefits
                    </p>
                    <ul className="space-y-1">
                      {supplement.benefits.map((benefit, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Considerations */}
                {supplement.considerations && supplement.considerations.length > 0 && (
                  <div>
                    <p className={`text-xs font-semibold mb-2 ${
                      isContraindicated ? 'text-red-400' : 'text-amber-400'
                    }`}>
                      {isContraindicated ? 'Why Not Recommended' : 'Considerations'}
                    </p>
                    <ul className="space-y-1">
                      {supplement.considerations.map((consideration, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <span className={isContraindicated ? 'text-red-400 mr-2' : 'text-amber-400 mr-2'}>•</span>
                          <span>{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Prescribing Info */}
                {supplement.prescribing && !isContraindicated && (
                  <div>
                    <p className="text-xs font-semibold text-blue-400 mb-2">
                      Prescribing Information
                    </p>
                    <ul className="space-y-1">
                      <li className="text-xs text-muted-foreground flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Dose:</strong> {supplement.prescribing.dose}</span>
                      </li>
                      <li className="text-xs text-muted-foreground flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Timing:</strong> {supplement.prescribing.timing}</span>
                      </li>
                      <li className="text-xs text-muted-foreground flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span><strong>Duration:</strong> {supplement.prescribing.duration}</span>
                      </li>
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
