export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const wipeFadeDown = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    opacity: 0,
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const wipeDown = {
  initial: {
    clipPath: "inset(0 0 100% 0)", // Hidden vertically
    opacity: 0,
  },
  animate: {
    clipPath: "inset(0 0 0% 0)", // Revealed
    opacity: 1,
    transition: {
      duration: 0.4, // Faster animation
      ease: "easeOut",
    },
  },
};
