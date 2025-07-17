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
