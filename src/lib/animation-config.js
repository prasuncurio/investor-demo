/**
 * Configuration for animation timing and behavior
 */

export const ANIMATION_CONFIG = {
  // Total duration - INCREASED for better visibility
  TOTAL_DURATION: 13500, // 13.5 seconds (was 5)

  // Phase durations - INCREASED significantly
  PHASE_1_DURATION: 3000, // 3 seconds (was 1)
  PHASE_2_DURATION: 4500, // 4.5 seconds (was 2)
  PHASE_3_DURATION: 6000, // 6 seconds (was 2)

  // Transition timing
  PHASE_TRANSITION_DURATION: 400,
  ENTRANCE_DURATION: 500,
  EXIT_DURATION: 300,

  // Progress bar
  PROGRESS_UPDATE_INTERVAL: 50, // Update every 50ms

  // Phase 1 specific - SLOWED DOWN
  CHART_ANIMATION_DURATION: 2000, // 2 seconds (was 800ms)
  CORRELATION_SYMBOL_DELAY: 1200, // 1.2 seconds (was 500ms)
  TEXT_OVERLAY_DELAY: 1800, // 1.8 seconds (was 600ms)
  PHASE1_COMPLETION_DELAY: 2500, // 2.5 seconds (was 900ms)

  // Phase 2 specific - SLOWED DOWN
  PATH_ANIMATION_DURATION: 800, // 0.8 seconds (was 400ms)
  PATH_STAGGER_DELAY: 600, // 0.6 seconds (was 200ms)
  SCENARIO_COUNT_INTERVAL: 600, // 0.6 seconds (was 200ms)

  // Phase 3 specific - SLOWED DOWN
  COUNTER_ANIMATION_DURATION: 4000, // 4 seconds (was 1200ms)
  CONFIDENCE_STEP_1_DELAY: 1500, // 1.5 seconds (was 800ms)
  CONFIDENCE_STEP_2_DELAY: 2500, // 2.5 seconds (was 1300ms)
  CONFIDENCE_STEP_3_DELAY: 3500, // 3.5 seconds (was 1800ms)
  COMPLETION_ICON_DELAY: 4200, // 4.2 seconds (was 2000ms)

  // Performance
  TARGET_FPS: 60,
  FRAME_TIME: 16.67, // 1000ms / 60fps

  // Accessibility
  REDUCED_MOTION_DURATION: 3000, // 3 seconds (was 2)
  SKIP_DELAY_BEFORE_COMPLETE: 100,

  // Spring physics
  SPRING_STIFFNESS: 200,
  SPRING_DAMPING: 15,
  SPRING_MASS: 0.8
};

// Breakpoints (match Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Z-index layers
export const Z_INDEX = {
  OVERLAY: 50,
  HEADER: 51,
  SKIP_BUTTON: 52
};
