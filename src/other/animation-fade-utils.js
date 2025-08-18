/**
 * Fades an element in using the Web Animations API.
 *
 * @param {HTMLElement} element The element to fade in.
 * @param {number} [duration=400] The duration of the animation in milliseconds.
 * @returns {Animation} The Animation object.
 */
export const fadeIn = (element, duration = 400) => {
  if (!element) return;
  element.style.display = '';
  const animation = element.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: duration,
    easing: 'ease-in-out',
  });
  animation.onfinish = () => {
    element.style.opacity = 1;
  };
  return animation;
};

/**
 * Fades an element out using the Web Animations API.
 *
 * @param {HTMLElement} element The element to fade out.
 * @param {number} [duration=400] The duration of the animation in milliseconds.
 * @returns {Animation} The Animation object.
 */
export const fadeOut = (element, duration = 400) => {
  if (!element) return;
  const animation = element.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], {
    duration: duration,
    easing: 'ease-in-out',
  });
  animation.onfinish = () => {
    element.style.display = 'none';
    element.style.opacity = 0;
  };
  return animation;
};
