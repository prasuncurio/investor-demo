import { AlertTriangle } from 'lucide-react';

/**
 * Unified component for rendering different metric types
 * Supports: numeric-change, risk-percentage, score, frequency, static
 */
export default function MetricDisplay({ metric, useCase = 'cardiovascular' }) {
  const {
    type,
    label,
    baseline,
    projected,
    month12,
    changePercent,
    unit,
    scale,
    isPositive,
    isStatic,
    warning,
    note
  } = metric;

  // Determine if change is beneficial
  const isBeneficial = isPositive !== undefined ? isPositive : changePercent < 0;
  const changeColor = changePercent === 0 ? 'text-muted-foreground' :
    isBeneficial ? 'text-green-500' : 'text-red-500';

  const projectedValue = projected !== undefined ? projected : month12;

  // Type: numeric-change (e.g., Hot Flashes: 22 → 8, -64%)
  if (type === 'numeric-change') {
    return (
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <div className="flex items-baseline gap-2">
          <div className="flex items-center gap-1">
            <span className="text-lg md:text-xl font-bold">
              {projectedValue}
            </span>
            {unit && <span className="text-xs text-muted-foreground">{unit}</span>}
          </div>
          {changePercent !== 0 && (
            <div className={`flex items-center gap-0.5 text-xs ${changeColor}`}>
              <span className="font-medium">
                {changePercent > 0 ? '+' : ''}{changePercent}%
              </span>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          from {baseline}{unit ? ` ${unit}` : ''}
        </p>
        {note && (
          <p className="text-xs text-muted-foreground italic">
            {note}
          </p>
        )}
      </div>
    );
  }

  // Type: risk-percentage (e.g., 5-Year BC Risk: 14.2%)
  if (type === 'risk-percentage') {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <p className="text-xs text-muted-foreground font-medium">{label}</p>
          {warning && (
            <AlertTriangle className="w-3 h-3 text-red-500" />
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <span className={`text-lg font-bold ${warning ? 'text-red-500' : ''}`}>
            {projectedValue}
          </span>
          {changePercent !== 0 && !isStatic && (
            <span className={`text-xs font-medium ${changeColor}`}>
              ({changePercent > 0 ? '+' : ''}{changePercent}%)
            </span>
          )}
        </div>
        {baseline !== projectedValue && (
          <p className="text-xs text-muted-foreground">
            from {baseline}
          </p>
        )}
        {note && (
          <p className="text-xs text-muted-foreground italic">
            {note}
          </p>
        )}
        {isStatic && (
          <p className="text-xs text-blue-400">
            ✓ Maintained within safe limits
          </p>
        )}
      </div>
    );
  }

  // Type: score (e.g., Sleep Quality: 8.1/10, +153%)
  if (type === 'score') {
    return (
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <div className="flex items-baseline gap-2">
          <div className="flex items-center gap-1">
            <span className="text-lg md:text-xl font-bold">
              {projectedValue}
            </span>
            {scale && (
              <span className="text-xs text-muted-foreground">/{scale}</span>
            )}
          </div>
          {changePercent !== 0 && (
            <div className={`flex items-center gap-0.5 text-xs ${changeColor}`}>
              <span className="font-medium">
                {changePercent > 0 ? '+' : ''}{changePercent}%
              </span>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          from {baseline}{scale ? `/${scale}` : ''}
        </p>
        {note && (
          <p className="text-xs text-muted-foreground italic">
            {note}
          </p>
        )}
      </div>
    );
  }

  // Type: frequency (e.g., 8 hot flashes/day)
  if (type === 'frequency') {
    return (
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <p className="text-sm">
          {projectedValue} {unit}
        </p>
        <p className="text-xs text-muted-foreground">
          from {baseline} {unit}
          {changePercent !== 0 && (
            <span className={changeColor + ' ml-1'}>
              ({changePercent > 0 ? '+' : ''}{changePercent}%)
            </span>
          )}
        </p>
        {note && (
          <p className="text-xs text-muted-foreground italic">
            {note}
          </p>
        )}
      </div>
    );
  }

  // Type: static (unchanged value with explanation)
  if (type === 'static') {
    return (
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
        <p className="text-sm font-semibold">{projectedValue}</p>
        {note && (
          <p className="text-xs text-blue-400">
            {note}
          </p>
        )}
      </div>
    );
  }

  // Default fallback
  return (
    <div className="space-y-1">
      <p className="text-xs text-muted-foreground font-medium">{label}</p>
      <p className="text-sm">{projectedValue}</p>
    </div>
  );
}
