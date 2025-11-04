import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function MetricRow({
  label,
  baseline,
  projected,
  unit,
  changePercent,
  showProgressBar = false,
  target = null,
  isPositive = true,
  compact = false
}) {
  // Determine trend direction
  const getTrend = () => {
    if (changePercent > 0) return isPositive ? 'up' : 'down';
    if (changePercent < 0) return isPositive ? 'down' : 'up';
    return 'neutral';
  };

  const trend = getTrend();

  // Calculate progress percentage for bar
  const getProgressPercent = () => {
    if (!target) return 0;
    const range = Math.abs(baseline - target);
    const progress = Math.abs(baseline - projected);
    return Math.min((progress / range) * 100, 100);
  };

  const progressPercent = getProgressPercent();

  // Determine color based on trend
  const getColor = () => {
    if (trend === 'up') return 'text-green-500';
    if (trend === 'down') return 'text-red-500';
    return 'text-muted-foreground';
  };

  const getBgColor = () => {
    if (trend === 'up') return 'bg-green-500';
    if (trend === 'down') return 'bg-red-500';
    return 'bg-muted';
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <div className={compact ? 'space-y-1' : 'space-y-2'}>
      {/* Label */}
      <p className="text-xs text-muted-foreground font-medium">{label}</p>

      {/* Value Display */}
      <div className="flex items-baseline gap-2">
        <div className="flex items-center gap-1">
          <span className="text-lg md:text-xl font-bold">{projected}</span>
          <span className="text-xs text-muted-foreground">{unit}</span>
        </div>

        {/* Change Indicator */}
        <div className={`flex items-center gap-0.5 text-xs ${getColor()}`}>
          <TrendIcon className="w-3 h-3" />
          <span className="font-medium">
            {Math.abs(changePercent)}%
          </span>
        </div>
      </div>

      {/* From baseline */}
      <p className="text-xs text-muted-foreground">
        from {baseline} {unit}
      </p>

      {/* Progress Bar */}
      {showProgressBar && target && (
        <div className="space-y-1">
          <div className="h-1.5 bg-border rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${getBgColor()}`}
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />
          </div>
          {target && (
            <p className="text-xs text-muted-foreground">
              Target: {target} {unit}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
