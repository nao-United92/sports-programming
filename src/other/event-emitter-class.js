/**
 * A simple EventEmitter class.
 */
export class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Adds a listener for a given event.
   * @param {string} eventName The name of the event to listen for.
   * @param {Function} listener The callback function.
   */
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  /**
   * Removes a listener for a given event.
   * @param {string} eventName The name of the event to stop listening to.
   * @param {Function} listener The callback function to remove.
   */
  off(eventName, listener) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(l => l !== listener);
  }

  /**
   * Emits an event, calling all registered listeners.
   * @param {string} eventName The name of the event to emit.
   * @param {...any} args Arguments to pass to the listeners.
   */
  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach(listener => listener(...args));
  }
}
