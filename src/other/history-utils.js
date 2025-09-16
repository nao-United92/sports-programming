/**
 * Goes back in history.
 */
const back = () => {
  history.back();
};

/**
 * Goes forward in history.
 */
const forward = () => {
  history.forward();
};

/**
 * Goes to a specific point in history.
 * @param {number} delta The position in history to move to.
 */
const go = (delta) => {
  history.go(delta);
};

module.exports = { back, forward, go };