class EventEmitter {
  constructor() {
    this._events = {};
  }

  /**
   * Adds a listener for a given event.
   * @param {string} eventName The name of the event to listen for.
   * @param {Function} listener The callback function.
   * @returns {this}
   */
  on(eventName, listener) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(listener);
    return this;
  }

  /**
   * Removes a listener for a given event.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The listener function to remove.
   * @returns {this}
   */
  off(eventName, listener) {
    if (!this._events[eventName]) {
      return this;
    }
    const index = this._events[eventName].indexOf(listener);
    if (index > -1) {
      this._events[eventName].splice(index, 1);
    }
    return this;
  }

  /**
   * Emits an event, calling all registered listeners with the provided arguments.
   * @param {string} eventName The name of the event to emit.
   * @param  {...any} args Arguments to pass to the listeners.
   * @returns {boolean} True if the event had listeners, false otherwise.
   */
  emit(eventName, ...args) {
    if (!this._events[eventName]) {
      return false;
    }
    // Create a copy in case a listener modifies the original array (e.g., by calling off())
    const listeners = [...this._events[eventName]];
    listeners.forEach(listener => {
      listener(...args);
    });
    return true;
  }

  /**
   * Adds a one-time listener for an event.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function.
   * @returns {this}
   */
  once(eventName, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(eventName, onceWrapper);
    };
    // Store a reference to the original listener for easier removal if needed
    onceWrapper.originalListener = listener;
    this.on(eventName, onceWrapper);
    return this;
  }
}

module.exports = {
  EventEmitter,
};