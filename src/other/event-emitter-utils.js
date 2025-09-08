class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
    return () => this.off(eventName, listener); // Return an unsubscribe function
  }

  off(eventName, listener) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(l => l !== listener);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    // Create a copy of the listeners array in case a listener modifies the array while iterating
    const listeners = [...this.events[eventName]];
    listeners.forEach(listener => listener(...args));
  }

  once(eventName, listener) {
    const onceListener = (...args) => {
      listener(...args);
      this.off(eventName, onceListener);
    };
    return this.on(eventName, onceListener);
  }
}

module.exports = { EventEmitter };
