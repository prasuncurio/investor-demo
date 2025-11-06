/**
 * Helper functions for patient data processing
 */

/**
 * Format a date string to a readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Get risk level styling based on cardiovascular risk category
 * @param {string} category - Risk category (Low, Moderate, High)
 * @returns {object} Style configuration
 */
export function getRiskLevelStyle(category) {
  const styles = {
    Low: {
      variant: 'secondary',
      className: 'bg-green-500/10 text-green-700 dark:text-green-400',
    },
    Moderate: {
      variant: 'secondary',
      className: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
    },
    High: {
      variant: 'destructive',
      className: '',
    },
  };
  return styles[category] || styles.Moderate;
}

/**
 * Get trend icon name based on trend direction
 * @param {string} trend - Trend direction (rising, declining, stable)
 * @returns {string} Lucide icon name
 */
export function getTrendIcon(trend) {
  const icons = {
    rising: 'TrendingUp',
    declining: 'TrendingDown',
    stable: 'Minus',
  };
  return icons[trend] || 'Minus';
}

/**
 * Get trend color class based on metric type and trend
 * @param {string} metricType - Type of metric (ldl, estradiol, hotFlashes, symptomSeverity, etc.)
 * @param {string} trend - Trend direction
 * @returns {string} Tailwind color class
 */
export function getTrendColor(metricType, trend) {
  // For LDL, rising is bad (destructive)
  if (metricType === 'ldl') {
    return trend === 'rising' ? 'text-destructive' : 'text-green-600';
  }
  // For Estradiol, declining is concerning (but not necessarily bad)
  if (metricType === 'estradiol') {
    return trend === 'declining'
      ? 'text-muted-foreground'
      : 'text-green-600';
  }
  // For hot flashes and symptom severity, rising is bad (destructive)
  if (metricType === 'hotFlashes' || metricType === 'symptomSeverity') {
    return trend === 'rising' ? 'text-destructive' : 'text-green-600';
  }
  // Default
  return 'text-muted-foreground';
}

/**
 * Format chart data for Recharts from history array
 * @param {Array} history - Array of {date, value} objects
 * @returns {Array} Formatted chart data
 */
export function formatChartData(history) {
  return history.map((point) => ({
    date: point.date,
    value: point.value,
    formattedDate: formatMonthYear(point.date),
  }));
}

/**
 * Format date to "MMM 'YY" format for chart labels
 * @param {string} dateString - Date in YYYY-MM format
 * @returns {string} Formatted date like "Jan '22"
 */
export function formatMonthYear(dateString) {
  const [year, month] = dateString.split('-');
  const date = new Date(year, parseInt(month) - 1);
  const monthName = date.toLocaleDateString('en-US', { month: 'short' });
  const shortYear = year.slice(2);
  return `${monthName} '${shortYear}`;
}

/**
 * Calculate the domain for chart Y-axis with padding
 * @param {Array} data - Chart data points
 * @param {string} dataKey - Key to extract values
 * @returns {Array} [min, max] domain values
 */
export function getChartDomain(data, dataKey = 'value') {
  const values = data.map((d) => d[dataKey]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min) * 0.1; // 10% padding
  return [Math.floor(min - padding), Math.ceil(max + padding)];
}

/**
 * Get alert message for elevated metrics
 * @param {object} patient - Patient data object
 * @returns {object|null} Alert configuration or null
 */
export function getMetricAlert(patient) {
  const { ldl, estradiol, hotFlashes, symptomSeverity } = patient.metrics;

  // Cardiovascular patient alerts
  if (ldl && ldl.current > 160 && Math.abs(ldl.changePercent) > 30) {
    return {
      type: 'warning',
      title: 'Significant LDL Elevation Detected',
      message: `LDL cholesterol has increased ${Math.abs(ldl.changePercent).toFixed(1)}% during perimenopausal transition. Intervention recommended.`,
    };
  }

  if (estradiol && estradiol.current < 50 && Math.abs(estradiol.changePercent) > 70) {
    return {
      type: 'info',
      title: 'Significant Hormonal Change',
      message: `Estradiol levels have declined ${Math.abs(estradiol.changePercent).toFixed(1)}% from baseline, indicating active perimenopausal transition.`,
    };
  }

  // Breast cancer patient alerts
  if (hotFlashes && hotFlashes.current > 20) {
    return {
      type: 'warning',
      title: 'Severe Vasomotor Symptoms',
      message: `Patient experiencing ${hotFlashes.current} hot flashes per day with severity of ${symptomSeverity?.current}/10. Significant impact on quality of life.`,
    };
  }

  return null;
}
