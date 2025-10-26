import { Variants } from "framer-motion";

const slideUp: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.4,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
const slideUpsec: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.3,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
const SlideRight: Variants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.3,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
const slideLeft: Variants = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1,
      delay: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
const zoomIn: Variants = {
  offscreen: {
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};
const rotatezoomIn: Variants = {
  offscreen: {
    scale: 0.7,
    opacity: 0,
  },
  onscreen: {
    scale: 0.98,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export default {
  slideUp,
  slideUpsec,
  SlideRight,
  slideLeft,
  zoomIn,
  rotatezoomIn,
};
