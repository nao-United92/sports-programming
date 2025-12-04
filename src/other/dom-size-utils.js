export const getWindowSize = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const getElementSize = (element) => {
  if (!element || typeof element.getBoundingClientRect !== 'function') {
    return { width: 0, height: 0 };
  }
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
};
