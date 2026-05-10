import { useReducedMotion } from "framer-motion";

// Standard easing curve used throughout ManageFlow
const easeSoft = [0.22, 0.61, 0.36, 1];

export const motionVariants = {
  // Scan effect - horizontal slide in with fade
  scanEffect: {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 + i * 0.05,
        ease: easeSoft
      }
    })
  },

  // Slide & fade reveal
  slideReveal: {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeSoft
      }
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } }
  },

  // Staggered children entrance
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  },

  staggerChild: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeSoft
      }
    }
  },

  // Hover 3D lift effect
  liftHover: {
    whileHover: { y: -4, scale: 1.01 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3, ease: easeSoft }
  },

  // Card hover with glow
  cardHover: {
    whileHover: { y: -6, scale: 1.02 },
    transition: { duration: 0.4, ease: easeSoft }
  },

  // Split reveal - before fades left, after slides in
  beforeAfterRevealBefore: {
    initial: { opacity: 1, x: 0 },
    animate: (isRevealed: boolean) => ({
      opacity: isRevealed ? 0.2 : 1,
      x: isRevealed ? -30 : 0,
      transition: { duration: 0.5, ease: easeSoft }
    })
  },

  beforeAfterRevealAfter: {
    initial: { opacity: 0, x: 30 },
    animate: (isRevealed: boolean) => ({
      opacity: isRevealed ? 1 : 0,
      x: isRevealed ? 0 : 30,
      transition: { duration: 0.5, ease: easeSoft }
    })
  },

  // Checkmark animation
  checkmarkAnimation: {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  },

  // Number/price counter appearance
  priceReveal: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeSoft
      }
    }
  },

  // Pulse/glow effect
  pulse: {
    initial: { boxShadow: "0 0 0 0 rgba(194, 165, 123, 0.7)" },
    animate: {
      boxShadow: "0 0 0 20px rgba(194, 165, 123, 0)"
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  },

  // Fade in only
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: easeSoft }
    }
  },

  // Scale up reveal (used for emphasis)
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeSoft }
    }
  }
};
