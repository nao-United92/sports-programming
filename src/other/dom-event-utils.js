export const on = (element, eventName, handler, options) => {
  if (element && eventName && handler) {
    element.addEventListener(eventName, handler, options);
  }
};

export const off = (element, eventName, handler, options) => {
  if (element && eventName && handler) {
    element.removeEventListener(eventName, handler, options);
  }
};