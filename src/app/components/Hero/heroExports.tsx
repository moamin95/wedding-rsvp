export const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(239, 68, 68, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(239, 68, 68, 1)",
  },
};

export const svgTransitionDefault = {
  duration: 2,
  ease: "easeInOut",
  delay: 1,
  repeat: Infinity,
  repeatType: "reverse",
  repeatDelay: 1,
};

export const svgTransitionFill = {
  duration: 2,
  ease: "easeIn",
  delay: 2,
  repeat: Infinity,
  repeatType: "reverse",
  repeatDelay: 1,
};

export const alviProps = {
  movingNameDivClass:
    "font-sans text-3xl leading-normal tracking-normal text-black-custom",
  style: { whiteSpace: "nowrap" },
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
};

export const prityProps = {
  movingNameDivClass:
    "font-sans text-3xl leading-normal tracking-normal text-black-custom",
  style: { whiteSpace: "nowrap" },
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
};
