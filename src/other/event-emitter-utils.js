/**
 * A simple event emitter class that allows for subscribing to events and emitting them.
 */
export class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Register an event listener.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function.
   */
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  /**
   * Remove an event listener.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function to remove.
   */
  off(eventName, listener) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(
      l => l !== listener
    );
  }

  /**
   * Emit an event, calling all registered listeners.
   * @param {string} eventName The name of the event to emit.
   * @param  {...any} args Arguments to pass to the listeners.
   */
  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    // Use a copy of the array in case a listener modifies the original array
    [...this.events[eventName]].forEach(listener => {
      listener(...args);
    });
  }

  /**
   * Register an event listener that will be called only once.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function.
   */
  once(eventName, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(eventName, onceWrapper);
    };
    this.on(eventName, onceWrapper);
  }
}
