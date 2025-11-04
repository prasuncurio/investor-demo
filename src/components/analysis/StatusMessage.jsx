import { motion } from 'framer-motion';
import { Sparkles, GitBranch, Database, Circle, LoaderCircle, CircleCheckBig } from 'lucide-react';

const iconMap = {
  Sparkles,
  GitBranch,
  Database
};

const messageVariants = {
  pending: {
    opacity: 0.4,
    x: 0,
    scale: 0.98,
    transition: { duration: 0.2 }
  },
  active: {
    opacity: 1,
    x: 4,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20
    }
  },
  completed: {
    opacity: 0.6,
    x: 0,
    scale: 0.98,
    transition: { duration: 0.3 }
  }
};

export default function StatusMessage({ iconName, text, status, active }) {
  const getIconComponent = () => {
    if (status === 'completed') {
      return { Component: CircleCheckBig, className: 'text-chart-2' };
    }
    if (status === 'active' || active) {
      return { Component: LoaderCircle, className: 'text-chart-1 animate-spin' };
    }
    return { Component: Circle, className: 'text-border' };
  };

  const { Component: IconComponent, className } = getIconComponent();

  return (
    <motion.div
      className="flex items-center gap-3"
      variants={messageVariants}
      animate={
        status === 'completed' ? 'completed' :
        (status === 'active' || active) ? 'active' :
        'pending'
      }
      role="listitem"
      aria-label={`${text}: ${status}`}
    >
      <IconComponent className={`w-5 h-5 ${className}`} />
      <span className="text-sm">{text}</span>
    </motion.div>
  );
}
