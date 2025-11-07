import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, XCircle, Pill } from 'lucide-react';

export default function Phase1SupplementSafety() {
  const [checkedSupplements, setCheckedSupplements] = useState([]);

  const supplements = [
    {
      id: 'relizen',
      name: 'Relizen',
      subtitle: 'Swedish Pollen',
      status: 'safe',
      icon: ShieldCheck,
      color: 'green',
      delay: 0.5
    },
    {
      id: 'black-cohosh',
      name: 'Black Cohosh',
      subtitle: 'Cimicifuga',
      status: 'caution',
      icon: AlertTriangle,
      color: 'amber',
      delay: 0.7
    },
    {
      id: 'soy',
      name: 'Soy Isoflavones',
      subtitle: 'Genistein',
      status: 'caution',
      icon: AlertTriangle,
      color: 'amber',
      delay: 0.9
    },
    {
      id: 'not-recommended',
      name: 'Others',
      subtitle: 'Red Clover, Dong Quai',
      status: 'avoid',
      icon: XCircle,
      color: 'red',
      delay: 1.1
    }
  ];

  const safetyChecks = [
    { label: 'Hormone content', delay: 0.3 },
    { label: 'BC risk', delay: 0.5 },
    { label: 'Drug interactions', delay: 0.7 }
  ];

  useEffect(() => {
    supplements.forEach((supplement, index) => {
      setTimeout(() => {
        setCheckedSupplements(prev => [...prev, supplement.id]);
      }, supplement.delay * 1000);
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
          Safety Profile Assessment
        </h3>
        <p className="text-sm text-muted-foreground">
          Evaluating oncologic safety
        </p>
      </motion.div>

      {/* Supplement Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {supplements.map((supplement) => {
          const StatusIcon = supplement.icon;
          const isChecked = checkedSupplements.includes(supplement.id);

          return (
            <motion.div
              key={supplement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: supplement.delay }}
              className={`p-4 rounded-lg border-2 ${
                supplement.color === 'green'
                  ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
                  : supplement.color === 'amber'
                  ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800'
                  : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
              }`}
            >
              {/* Pill icon */}
              <div className="flex justify-center mb-2">
                <Pill className={`w-8 h-8 ${
                  supplement.color === 'green'
                    ? 'text-green-600 dark:text-green-400'
                    : supplement.color === 'amber'
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-red-600 dark:text-red-400'
                }`} />
              </div>

              {/* Name */}
              <div className="text-center mb-2">
                <div className={`text-sm font-semibold ${
                  supplement.color === 'green'
                    ? 'text-green-900 dark:text-green-100'
                    : supplement.color === 'amber'
                    ? 'text-amber-900 dark:text-amber-100'
                    : 'text-red-900 dark:text-red-100'
                }`}>
                  {supplement.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {supplement.subtitle}
                </div>
              </div>

              {/* Status Icon with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isChecked ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <StatusIcon className={`w-6 h-6 ${
                  supplement.color === 'green'
                    ? 'text-green-600 dark:text-green-400'
                    : supplement.color === 'amber'
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-red-600 dark:text-red-400'
                }`} />
              </motion.div>

              {/* Status Label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isChecked ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-center mt-2"
              >
                <span className={`text-xs font-medium uppercase tracking-wide ${
                  supplement.color === 'green'
                    ? 'text-green-700 dark:text-green-300'
                    : supplement.color === 'amber'
                    ? 'text-amber-700 dark:text-amber-300'
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {supplement.status}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Safety Checks Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto space-y-2"
      >
        <div className="text-sm font-medium text-muted-foreground text-center mb-3">
          Checking:
        </div>
        {safetyChecks.map((check, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: check.delay }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: check.delay + 0.1, duration: 0.4 }}
              className="flex-1 h-2 bg-primary/20 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: check.delay + 0.2, duration: 0.3 }}
                className="h-full bg-primary rounded-full"
              />
            </motion.div>
            <span className="text-xs text-muted-foreground w-32 text-right">
              {check.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
