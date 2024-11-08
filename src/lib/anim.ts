export const transition = { duration: 1.76, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    opacity: 1,
  },
  open: {
    opacity: 0.2,
  },
  closed: {
    opacity: 1,
  },
};

export const translate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.76, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.76, ease: [0.76, 0, 0.24, 1] },
  },
};

export const pageSlide = {
  initial: {
    y: 0,
  },
  exit: {
    y: '-100%',
    transition,
  },
};

export const transitionSlide = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: '-100vh',
    transition,
  },
};

export const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: '47.5%' },
  },
  exit: {
    opacity: 1,
    top: '40%',
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

export const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const translatePage = {
  initial: {
    top: '-300px',
  },
  enter: {
    top: '-100vh',
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: '100vh',
    },
  },
  exit: {
    top: '-300px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

// Types for each variant
type Opacity = typeof opacity;
type Translate = typeof translate;
type PageSlide = typeof pageSlide;
type Text = typeof text;
type TranslatePage = typeof translatePage;
type Curve = ReturnType<typeof curve>;
type TransitionSlide = typeof transitionSlide; 


export type AnimationVariants =
  | Opacity
  | Translate
  | PageSlide
  | Text
  | TranslatePage
  | Curve
  | TransitionSlide

// Animation helper function
export const anim = (variants: AnimationVariants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};
