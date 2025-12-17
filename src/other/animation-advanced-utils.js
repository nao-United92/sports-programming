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
      element.style.display = 'none';
    }
  };

  requestAnimationFrame(animate);
}

/**
 * Toggles the slide animation of an element (slide up if visible, slide down if hidden).
 * @param {HTMLElement} element The HTML element to toggle.
 * @param {number} [duration=400] The duration of the animation in milliseconds.
 * @returns {Promise<void>} A Promise that resolves when the animation is complete.
 */
export function slideToggle(element, duration = 400) {
  if (!element) {
    console.warn('slideToggle: Invalid element provided.');
    return Promise.resolve();
  }

  if (element.offsetHeight === 0) {
    return slideDown(element, duration);
  } else {
    return slideUp(element, duration);
  }
}

/**
 * Applies a pulsing animation to an element by repeatedly scaling it up and down.
 * @param {HTMLElement} element The HTML element to animate.
 * @param {number} [scale=1.1] The maximum scale factor.
 * @param {number} [duration=500] The duration of one pulse cycle in milliseconds.
 * @param {number} [iterations=Infinity] The number of times to repeat the pulse. Use Infinity for continuous.
 */
export function pulse(
  element,
  scale = 1.1,
  duration = 500,
  iterations = Infinity
) {
  if (!element) {
    console.warn('pulse: Invalid element provided.');
    return;
  }

  element.animate(
    [
      { transform: 'scale(1)' },
      { transform: `scale(${scale})` },
      { transform: 'scale(1)' },
    ],
    {
      duration: duration,
      iterations: iterations,
      easing: 'ease-in-out',
    }
  );
}

// Helper functions for slideToggle (assuming they are defined elsewhere or imported)
// These are simplified versions for demonstration. In a real scenario, you'd import them.
function slideDown(element, duration) {
  return new Promise((resolve) => {
    element.style.height = '0';
    element.style.overflow = 'hidden';
    element.style.display = 'block';
    const startHeight = 0;
    const endHeight = element.scrollHeight;
    let start = null;
    const animate = (currentTime) => {
      if (!start) start = currentTime;
      const progress = (currentTime - start) / duration;
      const currentHeight =
        startHeight + (endHeight - startHeight) * Math.min(progress, 1);
      element.style.height = currentHeight + 'px';
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.height = '';
        element.style.overflow = '';
        resolve();
      }
    };
    requestAnimationFrame(animate);
  });
}

function slideUp(element, duration) {
  return new Promise((resolve) => {
    element.style.height = element.scrollHeight + 'px';
    element.style.overflow = 'hidden';
    const startHeight = element.scrollHeight;
    const endHeight = 0;
    let start = null;
    const animate = (currentTime) => {
      if (!start) start = currentTime;
      const progress = (currentTime - start) / duration;
      const currentHeight =
        startHeight + (endHeight - startHeight) * Math.min(progress, 1);
      element.style.height = currentHeight + 'px';
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
        element.style.height = '';
        element.style.overflow = '';
        resolve();
      }
    };
    requestAnimationFrame(animate);
  });
}
