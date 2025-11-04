import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { riskModelingData } from '@/lib/animation-data';

export default function Phase2Risk() {
  const { scenarios, centralPoint } = riskModelingData;
  const [scenarioCount, setScenarioCount] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setScenarioCount(2), 200),
      setTimeout(() => setScenarioCount(3), 400),
      setTimeout(() => setScenarioCount(4), 600)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center h-full w-full"
    >
      {/* Scenario Counter */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-foreground mb-4"
      >
        Simulating scenario {scenarioCount} of 4...
      </motion.p>

      {/* SVG Visualization */}
      <div className="w-full max-w-xl">
        <svg viewBox="0 0 600 350" className="w-full h-full">
          {/* Central point */}
          <motion.circle
            cx={centralPoint.x}
            cy={centralPoint.y}
            r={centralPoint.radius}
            fill="hsl(var(--primary))"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <text
            x={centralPoint.x}
            y={centralPoint.y + 25}
            fontSize="10"
            fill="hsl(var(--muted-foreground))"
            textAnchor="middle"
          >
            {centralPoint.label}
          </text>

          {/* Branching paths */}
          {scenarios.map((scenario, index) => (
            <g key={scenario.id}>
              <motion.path
                d={scenario.path}
                stroke={scenario.color}
                strokeWidth={scenario.strokeWidth}
                strokeDasharray={scenario.strokeDasharray || 'none'}
                fill="none"
                opacity={scenario.opacity}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: scenario.opacity }}
                transition={{
                  duration: 0.4,
                  delay: scenario.delay / 1000,
                  ease: 'easeInOut'
                }}
                style={{
                  filter: scenario.glow
                    ? `drop-shadow(0 0 ${scenario.strokeWidth * 2}px ${scenario.color})`
                    : 'none'
                }}
              />

              {/* Path label */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (scenario.delay + 400) / 1000 }}
              >
                <rect
                  x={scenario.label.position.x - 45}
                  y={scenario.label.position.y - 12}
                  width="90"
                  height="20"
                  fill="hsl(var(--card))"
                  stroke={scenario.color}
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x={scenario.label.position.x}
                  y={scenario.label.position.y}
                  fontSize="11"
                  fill="#ffffffff"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {scenario.label.text}
                </text>
              </motion.g>

              {/* Recommended star indicator */}
              {scenario.recommended && (
                <motion.g
                  role="img"
                  aria-label="Recommended option"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: (scenario.delay + 2000) / 1000,
                    type: 'spring',
                    stiffness: 400,
                    damping: 12
                  }}
                >
                  {/* Star background circle for better visibility */}
                  <circle
                    cx={scenario.label.position.x + 65}
                    cy={scenario.label.position.y}
                    r="10"
                    fill="rgba(255, 200, 100, 0.15)"
                    stroke="#FFA500"
                    strokeWidth="1"
                  />
                  {/* Star emoji */}
                  <text
                    x={scenario.label.position.x + 65}
                    y={scenario.label.position.y}
                    fontSize="14"
                    fill="#FFD700"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ userSelect: 'none' }}
                  >
                    ⭐
                  </text>
                </motion.g>
              )}
            </g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}
