
/**
 * Applies a CSS animation to an element and executes a callback upon completion.
 * Requires CSS classes defining the animation (e.g., from animate.css).
 * @param {HTMLElement} element The HTML element to animate.
 * @param {string} animationName The name of the CSS animation class (e.g., 'fadeIn').
 * @param {Function} [callback] A function to execute after the animation completes.
 */
export function animateCss(element, animationName, callback) {
  if (!element || !animationName) {
    console.warn('animateCss: Invalid element or animationName provided.');
    return;
  }

  const animationEnd = () => {
    element.classList.remove('animated', animationName);
    element.removeEventListener('animationend', animationEnd);
    if (typeof callback === 'function') {
      callback();
    }
  };

  element.addEventListener('animationend', animationEnd, { once: true });
  element.classList.add('animated', animationName);
}

/**
 * Fades in an HTML element by gradually increasing its opacity.
 * @param {HTMLElement} element The HTML element to fade in.
 * @param {number} [duration=400] The duration of the fade in animation in milliseconds.
 */
export function fadeIn(element, duration = 400) {
  if (!element) {
    console.warn('fadeIn: Invalid element provided.');
    return;
  }

  element.style.opacity = 0;
  element.style.display = ''; // Ensure element is visible

  let start = null;
  const animate = (currentTime) => {
    if (!start) start = currentTime;
    const progress = (currentTime - start) / duration;
    element.style.opacity = Math.min(progress, 1);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

/**
 * Fades out an HTML element by gradually decreasing its opacity.
 * @param {HTMLElement} element The HTML element to fade out.
 * @param {number} [duration=400] The duration of the fade out animation in milliseconds.
 */
export function fadeOut(element, duration = 400) {
  if (!element) {
    console.warn('fadeOut: Invalid element provided.');
    return;
  }

  element.style.opacity = 1;

  let start = null;
  const animate = (currentTime) => {
    if (!start) start = currentTime;
    const progress = (currentTime - start) / duration;
    element.style.opacity = Math.max(1 - progress, 0);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none'; // Hide element after fade out
    }
  };

  requestAnimationFrame(animate);
}
