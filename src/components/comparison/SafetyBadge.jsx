import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Safety badge component for displaying contraindication warnings
 */
export default function SafetyBadge({ message, severity = 'error', className = '' }) {
  const severityStyles = {
    error: {
      border: 'border-red-500',
      bg: 'bg-red-500/10',
      text: 'text-red-500',
      icon: 'text-red-500'
    },
    warning: {
      border: 'border-amber-500',
      bg: 'bg-amber-500/10',
      text: 'text-amber-500',
      icon: 'text-amber-500'
    },
    info: {
      border: 'border-blue-500',
      bg: 'bg-blue-500/10',
      text: 'text-blue-500',
      icon: 'text-blue-500'
    }
  };

  const styles = severityStyles[severity] || severityStyles.error;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`
        flex items-start gap-2 p-3 rounded-lg border-2
        ${styles.border} ${styles.bg}
        ${className}
      `}
    >
      <AlertTriangle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${styles.icon}`} />
      <p className={`text-xs font-semibold ${styles.text}`}>
        {message}
      </p>
    </motion.div>
  );
}
