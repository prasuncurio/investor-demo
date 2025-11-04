import { motion } from 'framer-motion';

export default function ProgressBar({ progress }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Analysis progress: ${Math.round(progress)} percent complete`}
      className="w-full h-2 bg-muted rounded-full overflow-hidden"
    >
      <motion.div
        className="h-full bg-primary rounded-full"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 12px hsl(var(--primary) / 0.4)'
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
}
