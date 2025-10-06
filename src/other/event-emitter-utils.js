const createEventEmitter = () => {
  const events = {};

  const on = (eventName, listener) => {
    if (!events[eventName]) {
      events[eventName] = [];
    }
    events[eventName].push(listener);
  };

  const off = (eventName, listener) => {
    if (!events[eventName]) {
      return;
    }
    events[eventName] = events[eventName].filter(l => l !== listener);
  };

  const emit = (eventName, ...args) => {
    if (!events[eventName]) {
      return;
    }
    events[eventName].forEach(listener => listener(...args));
  };

  return {
    on,
    off,
    emit,
  };
};

module.exports = { createEventEmitter };