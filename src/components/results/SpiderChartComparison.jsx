import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function SpiderChartComparison({ data }) {
  const dimensions = data.dimensions;
  const numAxes = dimensions.length;
  const angleStep = (Math.PI * 2) / numAxes;
  const radius = 140;
  const centerX = 200;
  const centerY = 200;

  // Calculate points for each treatment
  const calculatePoint = (value, index) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const r = (value / 10) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle)
    };
  };

  const statinPoints = dimensions.map((dim, i) =>
    calculatePoint(dim.statinValue, i)
  );
  const hrtPoints = dimensions.map((dim, i) =>
    calculatePoint(dim.hrtValue, i)
  );

  const statinPath = statinPoints.map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  const hrtPath = hrtPoints.map((p, i) =>
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Multi-Dimensional Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <svg width="400" height="400" viewBox="0 0 400 400" className="max-w-full h-auto">
            {/* Background grid circles */}
            {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, i) => (
              <circle
                key={i}
                cx={centerX}
                cy={centerY}
                r={radius * scale}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2,2"
                opacity="0.2"
                className="text-muted-foreground"
              />
            ))}

            {/* Axes */}
            {dimensions.map((dim, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const endX = centerX + radius * Math.cos(angle);
              const endY = centerY + radius * Math.sin(angle);
              const labelX = centerX + (radius + 40) * Math.cos(angle);
              const labelY = centerY + (radius + 40) * Math.sin(angle);

              return (
                <g key={i}>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={endX}
                    y2={endY}
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.2"
                    className="text-muted-foreground"
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[10px] fill-current font-medium"
                  >
                    {dim.label}
                  </text>
                </g>
              );
            })}

            {/* Statin area */}
            <motion.path
              d={statinPath}
              fill="oklch(0.6 0.16 250 / 0.2)"
              stroke="oklch(0.6 0.16 250)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* HRT area */}
            <motion.path
              d={hrtPath}
              fill="oklch(0.7 0.12 50 / 0.2)"
              stroke="oklch(0.7 0.12 50)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {/* Data points - Statin */}
            {statinPoints.map((point, i) => (
              <motion.circle
                key={`statin-${i}`}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="oklch(0.6 0.16 250)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05, type: "spring" }}
              />
            ))}

            {/* Data points - HRT */}
            {hrtPoints.map((point, i) => (
              <motion.circle
                key={`hrt-${i}`}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="oklch(0.7 0.12 50)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05, type: "spring" }}
              />
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <span className="text-sm">Statin: Strong in LDL, focused</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-500" />
            <span className="text-sm">HRT: Balanced multi-system</span>
          </div>
        </div>

        {/* Insight */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-900 dark:text-blue-100">
              {data.insight}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
