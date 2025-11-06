import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Phase2GuidelinesCheck() {
  const [completedItems, setCompletedItems] = useState([]);

  const checklistItems = [
    { id: 1, text: 'Checking contraindications', delay: 0 },
    { id: 2, text: 'Reviewing NAMS guidelines', delay: 500 },
    { id: 3, text: 'Assessing timing window', delay: 1000 }
  ];

  useEffect(() => {
    checklistItems.forEach(item => {
      setTimeout(() => {
        setCompletedItems(prev => [...prev, item.id]);
      }, item.delay);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Guidelines Review
        </h3>
        <p className="text-sm text-muted-foreground">
          Validating against clinical guidelines
        </p>
      </motion.div>

      {/* Checklist */}
      <div className="max-w-md mx-auto space-y-3">
        {checklistItems.map((item) => {
          const isCompleted = completedItems.includes(item.id);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay / 1000 }}
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
            >
              {isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Loader2 className="w-5 h-5 text-primary animate-spin flex-shrink-0" />
              )}
              <span className={`text-sm ${isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                {item.text}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Final badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span className="text-sm font-semibold text-green-900 dark:text-green-100">
            Recommendation ready
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
