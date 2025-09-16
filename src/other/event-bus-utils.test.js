const { eventBus } = require('./event-bus-utils.js');

// Mock document
global.document = {
  listeners: {},
  addEventListener(event, callback) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(callback);
  },
  removeEventListener(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    }
  },
  dispatchEvent(event) {
    if (this.listeners[event.type]) {
      this.listeners[event.type].forEach(cb => cb(event));
    }
  },
};

global.CustomEvent = class CustomEvent extends Event {
  constructor(type, options) {
    super(type);
    this.detail = options.detail;
  }
};

describe('eventBus', () => {
  it('should register an event handler and emit an event', () => {
    const mockCallback = jest.fn();
    eventBus.on('test-event', mockCallback);
    eventBus.emit('test-event', { a: 1 });
    expect(mockCallback).toHaveBeenCalledWith({ a: 1 });
  });

  it('should remove an event handler', () => {
    const mockCallback = jest.fn();
    eventBus.on('test-event', mockCallback);
    eventBus.off('test-event', mockCallback);
    eventBus.emit('test-event', { a: 1 });
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
