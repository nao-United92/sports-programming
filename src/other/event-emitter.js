/**
 * A simple event emitter implementation.
 */
export class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Subscribes to an event.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function.
   * @returns {Function} An unsubscribe function.
   */
  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
    return () => this.off(eventName, listener);
  }

  /**
   * Unsubscribes from an event.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function to remove.
   */
  off(eventName, listener) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(l => l !== listener);
  }

  /**
   * Emits an event, calling all subscribed listeners.
   * @param {string} eventName The name of the event to emit.
   * @param  {...any} args Arguments to pass to the listeners.
   */
  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach(listener => listener(...args));
  }

  /**
   * Subscribes to an event for a single emission.
   * @param {string} eventName The name of the event.
   * @param {Function} listener The callback function.
   */
  once(eventName, listener) {
    const onceListener = (...args) => {
      listener(...args);
      this.off(eventName, onceListener);
    };
    this.on(eventName, onceListener);
  }
}
