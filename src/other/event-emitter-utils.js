class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Registers an event listener.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function to execute when the event is emitted.
   */
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  /**
   * Removes an event listener.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function to remove.
   */
  off(eventName, listener) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(
      (l) => l !== listener
    );
  }

  /**
   * Emits an event, calling all registered listeners for that event.
   * @param {string} eventName The name of the event to emit.
   * @param {...any} args Arguments to pass to the event listeners.
   */
  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventEmitter;