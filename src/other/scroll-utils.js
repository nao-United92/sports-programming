export const scrollToTop = (options = {}) => {
  if (typeof window === 'undefined') {
    return;
  }
  window.scrollTo({ top: 0, left: 0, ...options });
};

export const scrollToElement = (element, options = {}) => {
  if (typeof window === 'undefined' || !element || typeof element.scrollIntoView !== 'function') {
    return;
  }
  element.scrollIntoView(options);
};
