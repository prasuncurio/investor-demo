import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Phase1Pattern from '@/components/analysis/Phase1Pattern';
import Phase2Risk from '@/components/analysis/Phase2Risk';
import Phase3Evidence from '@/components/analysis/Phase3Evidence';
import ProgressBar from '@/components/analysis/ProgressBar';
import StatusMessage from '@/components/analysis/StatusMessage';
import { statusMessagesData } from '@/lib/animation-data';
import { ANIMATION_CONFIG } from '@/lib/animation-config';

// Hook to detect reduced motion preference
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

export default function AnalysisAnimation({
  query,
  onComplete,
  patientName,
  duration = ANIMATION_CONFIG.TOTAL_DURATION
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const actualDuration = prefersReducedMotion ? ANIMATION_CONFIG.REDUCED_MOTION_DURATION : duration;

  // State
  const [currentPhase, setCurrentPhase] = useState(1);
  const [progress, setProgress] = useState(0);
  const [completedPhases, setCompletedPhases] = useState([]);
  const [srAnnouncement, setSrAnnouncement] = useState('');

  // Phase transitions
  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setCurrentPhase(2);
        setCompletedPhases([1]);
      }, ANIMATION_CONFIG.PHASE_1_DURATION),

      setTimeout(() => {
        setCurrentPhase(3);
        setCompletedPhases([1, 2]);
      }, ANIMATION_CONFIG.PHASE_1_DURATION + ANIMATION_CONFIG.PHASE_2_DURATION),

      setTimeout(() => {
        setCompletedPhases([1, 2, 3]);
        setTimeout(() => {
          onComplete();
        }, 300);
      }, actualDuration)
    ];

    return () => timers.forEach(clearTimeout);
  }, [actualDuration, onComplete]);

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = (100 / actualDuration) * ANIMATION_CONFIG.PROGRESS_UPDATE_INTERVAL;
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, ANIMATION_CONFIG.PROGRESS_UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [actualDuration]);

  // Screen reader announcements
  useEffect(() => {
    const announcements = [
      { time: 0, text: 'Beginning digital twin analysis' },
      { time: 500, text: 'Analyzing correlation between cholesterol and estradiol levels' },
      { time: 1000, text: 'Pattern recognition complete. Beginning risk modeling' },
      { time: 2000, text: 'Simulating four intervention scenarios' },
      { time: 3000, text: 'Risk modeling complete. Synthesizing evidence' },
      { time: 3500, text: 'Cross-referencing 2,347 similar patient cases' },
      { time: 4500, text: 'Confidence level: 87 percent' },
      { time: 5000, text: 'Analysis complete. Preparing results' }
    ];

    const timers = announcements.map(({ time, text }) =>
      setTimeout(() => setSrAnnouncement(text), time)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  // Keyboard skip functionality
  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        setProgress(100);
        setCompletedPhases([1, 2, 3]);
        setTimeout(onComplete, ANIMATION_CONFIG.SKIP_DELAY_BEFORE_COMPLETE);
      }
    }

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onComplete]);

  // Get status for each phase
  const getStatus = (phase) => {
    if (completedPhases.includes(phase)) return 'completed';
    if (currentPhase === phase) return 'active';
    return 'pending';
  };

  // Helper function for phase descriptions
  function getPhaseDescription(phase) {
    const descriptions = {
      1: 'Phase 1 of 3: Recognizing correlation patterns between cholesterol and hormone levels',
      2: 'Phase 2 of 3: Modeling risk outcomes for four intervention scenarios',
      3: 'Phase 3 of 3: Synthesizing evidence from 2,347 similar patient cases'
    };
    return descriptions[phase];
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label="Digital twin analysis in progress"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      >
        <div className="max-w-4xl w-full px-4 md:px-6 py-8 md:py-12">
          {/* Header */}
          <header className="text-center mb-6 md:mb-8">
            <Brain className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
            <h2 className="text-xl md:text-2xl font-bold">
              Analyzing Patient Data
            </h2>
            {query && (
              <p className="text-xs md:text-sm text-muted-foreground mt-2 italic">
                &ldquo;{query}&rdquo;
              </p>
            )}
          </header>

          {/* Progress Bar */}
          <div className="mb-8 md:mb-12">
            <ProgressBar progress={progress} />
          </div>

          {/* Visualization Area */}
          <Card className="min-h-[300px] md:min-h-[350px] lg:min-h-[400px] p-6 md:p-8 lg:p-12 relative">
            <div aria-label={getPhaseDescription(currentPhase)}>
              <AnimatePresence mode="wait">
                {currentPhase === 1 && <Phase1Pattern key="phase1" />}
                {currentPhase === 2 && <Phase2Risk key="phase2" />}
                {currentPhase === 3 && <Phase3Evidence key="phase3" />}
              </AnimatePresence>
            </div>
          </Card>

          {/* Status Messages */}
          <div className="mt-6 md:mt-8 space-y-3" role="list" aria-label="Analysis steps">
            {statusMessagesData.map(msg => (
              <StatusMessage
                key={msg.id}
                iconName={msg.icon}
                text={msg.text}
                status={getStatus(msg.phase)}
                active={currentPhase === msg.phase}
              />
            ))}
          </div>

          {/* Skip button (visually hidden but keyboard accessible) */}
          <button
            className="absolute top-4 right-4 px-4 py-2 text-sm opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring rounded"
            onClick={() => {
              setProgress(100);
              setCompletedPhases([1, 2, 3]);
              onComplete();
            }}
            aria-label="Skip animation and show results"
          >
            Press Space or Escape to skip
          </button>
        </div>
      </motion.div>

      {/* Screen reader only announcements */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {srAnnouncement}
      </div>
    </div>
  );
}
