/**
 * Smoothly scrolls an element into view.
 *
 * @param element The HTMLElement to scroll into view.
 * @param behavior Optional. 'auto', 'smooth', or 'instant'. Defaults to 'smooth'.
 * @param block Optional. 'start', 'center', 'end', or 'nearest'. Defaults to 'start'.
 */
export function scrollIntoViewSmoothly(element, behavior = 'smooth', block = 'start') {
    if (element && typeof element.scrollIntoView === 'function') {
        element.scrollIntoView({ behavior: behavior, block: block });
    }
}

/**
 * Fades an element in by gradually increasing its opacity.
 *
 * @param element The HTMLElement to fade in.
 * @param duration The duration of the fade in animation in milliseconds.
 * @returns A Promise that resolves when the animation is complete.
 */
export function fadeIn(element, duration = 500) {
    return new Promise(resolve => {
        if (!element) {
            resolve();
            return;
        }
        element.style.opacity = '0';
        element.style.display = ''; // Ensure element is displayed

        let start = null;
        function animate(currentTime) {
            if (!start) start = currentTime;
            const progress = (currentTime - start) / duration;
            element.style.opacity = Math.min(progress, 1).toString();
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(animate);
    });
}

/**
 * Fades an element out by gradually decreasing its opacity.
 *
 * @param element The HTMLElement to fade out.
 * @param duration The duration of the fade out animation in milliseconds.
 * @returns A Promise that resolves when the animation is complete.
 */
export function fadeOut(element, duration = 500) {
    return new Promise(resolve => {
        if (!element) {
            resolve();
            return;
        }
        element.style.opacity = '1';

        let start = null;
        function animate(currentTime) {
            if (!start) start = currentTime;
            const progress = (currentTime - start) / duration;
            element.style.opacity = (1 - Math.min(progress, 1)).toString();
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none'; // Hide element after fade out
                resolve();
            }
        }
        requestAnimationFrame(animate);
    });
}

/**
 * Slides an element down (shows it with a sliding animation).
 * @param {HTMLElement} element The HTML element to slide down.
 * @param {number} [duration=400] The duration of the animation in milliseconds.
 * @returns {Promise<void>} A Promise that resolves when the animation is complete.
 */
export function slideDown(element, duration = 400) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }

    element.style.height = '0';
    element.style.overflow = 'hidden';
    element.style.display = 'block';

    const startHeight = 0;
    const endHeight = element.scrollHeight; // Get the natural height

    let start = null;
    function animate(currentTime) {
      if (!start) start = currentTime;
      const progress = (currentTime - start) / duration;
      const currentHeight = startHeight + (endHeight - startHeight) * Math.min(progress, 1);
      element.style.height = currentHeight + 'px';

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.height = ''; // Remove inline height to allow content to flow naturally
        element.style.overflow = '';
        resolve();
      }
    }
    requestAnimationFrame(animate);
  });
}

/**
 * Slides an element up (hides it with a sliding animation).
 * @param {HTMLElement} element The HTML element to slide up.
 * @param {number} [duration=400] The duration of the animation in milliseconds.
 * @returns {Promise<void>} A Promise that resolves when the animation is complete.
 */
export function slideUp(element, duration = 400) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }

    element.style.height = element.scrollHeight + 'px'; // Set initial height to current scrollHeight
    element.style.overflow = 'hidden';

    const startHeight = element.scrollHeight;
    const endHeight = 0;

    let start = null;
    function animate(currentTime) {
      if (!start) start = currentTime;
      const progress = (currentTime - start) / duration;
      const currentHeight = startHeight + (endHeight - startHeight) * Math.min(progress, 1);
      element.style.height = currentHeight + 'px';

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
        element.style.height = '';
        element.style.overflow = '';
        resolve();
      }
    }
    requestAnimationFrame(animate);
  });
}

/**
 * Animates the scrolling of an element to a specific position.
 * @param {HTMLElement} element The element to scroll.
 * @param {number} to The target scroll position (e.g., scrollTop value).
 * @param {number} [duration=500] The duration of the animation in milliseconds.
 * @returns {Promise<void>} A Promise that resolves when the animation is complete.
 */
export function animateScrollTo(element, to, duration = 500) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }

    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += 10; // Increment time
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
      }
    };

    // Easing function (Quadratic ease-in-out)
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    animateScroll();
  });
}

/**
 * Stops all CSS animations on an element.
 * @param {HTMLElement} element The element to stop animations on.
 */
export function stopAnimations(element) {
  if (element && typeof element.getAnimations === 'function') {
    element.getAnimations().forEach(animation => {
      animation.cancel();
    });
  }
}

/**
 * Animates a CSS property of an element.
 * @param {HTMLElement} element The element to animate.
 * @param {string} property The CSS property to animate (e.g., 'opacity', 'width').
 * @param {number} from The starting value of the property.
 * @param {number} to The ending value of the property.
 * @param {string} unit The unit of the property (e.g., 'px', '%', '').
 * @param {number} [duration=500] The duration of the animation in milliseconds.
 * @returns {Promise<void>} A Promise that resolves when the animation is complete.
 */
export function animateProperty(element, property, from, to, unit, duration = 500) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }

    const start = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = from + (to - from) * progress;
      element.style[property] = `${value}${unit}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}

/**
 * Stops all animations on an element.
 * @param {HTMLElement} element The element to stop animations on.
 */
export function stopAnimation(element) {
  if (element && typeof element.getAnimations === 'function') {
    element.getAnimations().forEach(animation => {
      animation.cancel();
    });
  }
}

/**
 * Toggles the slide animation of an element (slideUp if visible, slideDown if hidden).
 * @param {HTMLElement} element The HTML element to toggle.
 * @param {number} [duration=400] The duration of the animation in milliseconds.
 * @returns {Promise<void>} A Promise that resolves when the animation is complete.
 */
export function slideToggle(element, duration = 400) {
  if (!element) {
    return Promise.resolve();
  }
  if (element.offsetHeight === 0) {
    return slideDown(element, duration);
  } else {
    return slideUp(element, duration);
  }
}
