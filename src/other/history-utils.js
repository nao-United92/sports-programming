/**
 * Navigates to the previous page in the session history.
 */
export const back = () => {
  window.history.back();
};

/**
 * Navigates to the next page in the session history.
 */
export const forward = () => {
  window.history.forward();
};

/**
 * Navigates to a specific page in the session history.
 * @param {number} delta The relative position to navigate to.
 */
export const go = (delta) => {
  window.history.go(delta);
};
