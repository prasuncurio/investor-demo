import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function MiniLineChart({ data, label, color, trend, width = 200, height = 80 }) {
  // Calculate SVG path from data points
  const pathData = useMemo(() => {
    if (!data || data.length === 0) return '';

    const padding = 10;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);

    // Find min and max values for scaling
    const values = data.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1;

    // Create path points
    const points = data.map((point, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth;
      const y = padding + chartHeight - ((point.value - minValue) / valueRange) * chartHeight;
      return { x, y };
    });

    // Generate SVG path string
    const pathString = points.reduce((path, point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `${path} L ${point.x} ${point.y}`;
    }, '');

    return pathString;
  }, [data, width, height]);

  // Get color classes based on trend
  const colorClasses = {
    up: {
      stroke: 'oklch(0.646 0.222 41.116)', // Red
      bg: 'bg-red-500/5',
      border: 'border-red-500/20',
      text: 'text-red-500'
    },
    down: {
      stroke: 'oklch(0.6 0.118 184.704)', // Blue
      bg: 'bg-blue-500/5',
      border: 'border-blue-500/20',
      text: 'text-blue-500'
    }
  };

  const colors = colorClasses[trend] || colorClasses.up;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg border ${colors.bg} ${colors.border}`}
    >
      {/* Label */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span className={`text-xs font-medium ${colors.text}`}>
          {trend === 'up' ? '↑' : '↓'} {trend === 'up' ? 'Rising' : 'Falling'}
        </span>
      </div>

      {/* Chart */}
      <svg width={width} height={height} className="w-full">
        {/* Grid lines */}
        <line
          x1="10"
          y1={height / 2}
          x2={width - 10}
          y2={height / 2}
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeDasharray="2,2"
        />

        {/* Animated line path */}
        <motion.path
          d={pathData}
          fill="none"
          stroke={colors.stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.2, ease: "easeInOut" },
            opacity: { duration: 0.3 }
          }}
        />

        {/* Data points */}
        {data.map((point, index) => {
          const x = 10 + (index / (data.length - 1)) * (width - 20);
          const values = data.map(d => d.value);
          const minValue = Math.min(...values);
          const maxValue = Math.max(...values);
          const valueRange = maxValue - minValue || 1;
          const y = 10 + (height - 20) - ((point.value - minValue) / valueRange) * (height - 20);

          return (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="3"
              fill={colors.stroke}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.8 + (index * 0.1),
                duration: 0.3
              }}
            />
          );
        })}
      </svg>

      {/* Value range */}
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>{data[0]?.value} {data[0]?.month}</span>
        <span>{data[data.length - 1]?.value} {data[data.length - 1]?.month}</span>
      </div>
    </motion.div>
  );
}
