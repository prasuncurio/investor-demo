import { motion } from 'framer-motion';
import { Lightbulb, GitBranch } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function DecisionTreeDiagram({ data }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <GitBranch className="w-5 h-5 text-primary" />
          </div>
          Decision Pathway: Statin vs HRT
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full min-h-[500px] overflow-x-auto">
          <svg width="100%" height="500" viewBox="0 0 800 500" className="text-foreground">
            {/* Root node */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <circle cx="400" cy="60" r="50" className="fill-blue-400 dark:fill-blue-600" />
              <text
                x="400"
                y="55"
                textAnchor="middle"
                className="text-xs font-semibold fill-white"
              >
                {data.root.label}
              </text>
              <text
                x="400"
                y="68"
                textAnchor="middle"
                className="text-[10px] fill-white"
              >
                {data.root.subtitle}
              </text>
            </motion.g>

            {/* Branching paths */}
            <motion.path
              d="M 400 110 Q 300 150, 250 200"
              stroke="oklch(0.6 0.16 250)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.path
              d="M 400 110 Q 500 150, 550 200"
              stroke="oklch(0.85 0.15 85)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Statin path label */}
            <motion.text
              x="200"
              y="130"
              textAnchor="middle"
              className="text-xs font-semibold fill-blue-600 dark:fill-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {data.paths.statin.label}
            </motion.text>

            {/* HRT path label */}
            <motion.text
              x="600"
              y="130"
              textAnchor="middle"
              className="text-xs font-semibold fill-amber-600 dark:fill-amber-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {data.paths.hrt.label}
            </motion.text>

            {/* Statin nodes */}
            {data.paths.statin.nodes.map((node, index) => (
              <motion.g
                key={`statin-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.3 }}
              >
                <rect
                  x={node.position.x - 60}
                  y={node.position.y - 30}
                  width="120"
                  height="60"
                  rx="8"
                  className="fill-blue-50 dark:fill-blue-950/30 stroke-blue-200 dark:stroke-blue-800"
                  strokeWidth="2"
                />
                <text
                  x={node.position.x}
                  y={node.position.y - 10}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-current"
                >
                  {node.timepoint}
                </text>
                <text
                  x={node.position.x}
                  y={node.position.y + 5}
                  textAnchor="middle"
                  className="text-[10px] fill-current"
                >
                  LDL: {node.metrics.ldl}
                </text>
                <text
                  x={node.position.x}
                  y={node.position.y + 18}
                  textAnchor="middle"
                  className="text-[10px] fill-current"
                >
                  Symptoms: {node.metrics.symptoms}
                </text>
              </motion.g>
            ))}

            {/* HRT nodes */}
            {data.paths.hrt.nodes.map((node, index) => (
              <motion.g
                key={`hrt-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.3 }}
              >
                <rect
                  x={node.position.x - 60}
                  y={node.position.y - 30}
                  width="120"
                  height="60"
                  rx="8"
                  className="fill-amber-50 dark:fill-amber-950/30 stroke-amber-200 dark:stroke-amber-800"
                  strokeWidth="2"
                />
                <text
                  x={node.position.x}
                  y={node.position.y - 10}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-current"
                >
                  {node.timepoint}
                </text>
                <text
                  x={node.position.x}
                  y={node.position.y + 5}
                  textAnchor="middle"
                  className="text-[10px] fill-current"
                >
                  LDL: {node.metrics.ldl}
                </text>
                <text
                  x={node.position.x}
                  y={node.position.y + 18}
                  textAnchor="middle"
                  className="text-[10px] fill-current"
                >
                  Symptoms: {node.metrics.symptoms}
                </text>
              </motion.g>
            ))}

            {/* Connecting lines between nodes */}
            {data.paths.statin.nodes.map((node, index) => {
              if (index < data.paths.statin.nodes.length - 1) {
                const nextNode = data.paths.statin.nodes[index + 1];
                return (
                  <motion.line
                    key={`statin-line-${index}`}
                    x1={node.position.x}
                    y1={node.position.y + 30}
                    x2={nextNode.position.x}
                    y2={nextNode.position.y - 30}
                    stroke="oklch(0.6 0.16 250)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.1 + index * 0.3, duration: 0.5 }}
                  />
                );
              }
              return null;
            })}

            {data.paths.hrt.nodes.map((node, index) => {
              if (index < data.paths.hrt.nodes.length - 1) {
                const nextNode = data.paths.hrt.nodes[index + 1];
                return (
                  <motion.line
                    key={`hrt-line-${index}`}
                    x1={node.position.x}
                    y1={node.position.y + 30}
                    x2={nextNode.position.x}
                    y2={nextNode.position.y - 30}
                    stroke="oklch(0.85 0.15 85)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.1 + index * 0.3, duration: 0.5 }}
                  />
                );
              }
              return null;
            })}
          </svg>
        </div>

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
              {data.insight}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
