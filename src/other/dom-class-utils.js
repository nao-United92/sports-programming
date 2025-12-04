export const hasClass = (element, className) => {
  if (!element || !className || typeof element.classList === 'undefined') {
    return false;
  }
  return element.classList.contains(className);
};

export const toggleClass = (element, className, force) => {
  if (!element || !className || typeof element.classList === 'undefined') {
    return;
  }
  element.classList.toggle(className, force);
};
