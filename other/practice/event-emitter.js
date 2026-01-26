class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
    return () => this.off(eventName, listener); // Return unsubscribe function
  }

  off(eventName, listener) {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter(
      (l) => l !== listener
    );
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach((listener) => {
      listener(...args);
    });
  }
}

module.exports = { EventEmitter };
