import { EventEmitter } from './event-emitter.js';

describe('EventEmitter', () => {
  let emitter;
  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it('should subscribe and emit an event', () => {
    const listener = jest.fn();
    emitter.on('test', listener);
    emitter.emit('test', 1, 'arg2');
    expect(listener).toHaveBeenCalledWith(1, 'arg2');
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should unsubscribe from an event', () => {
    const listener = jest.fn();
    emitter.on('test', listener);
    emitter.off('test', listener);
    emitter.emit('test');
    expect(listener).not.toHaveBeenCalled();
  });

  it('should handle multiple listeners for the same event', () => {
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    emitter.on('test', listener1);
    emitter.on('test', listener2);
    emitter.emit('test');
    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
  });

  it('should work with the returned unsubscribe function', () => {
    const listener = jest.fn();
    const unsubscribe = emitter.on('test', listener);
    unsubscribe();
    emitter.emit('test');
    expect(listener).not.toHaveBeenCalled();
  });

  it('should handle `once` listeners correctly', () => {
    const listener = jest.fn();
    emitter.once('test', listener);
    emitter.emit('test');
    emitter.emit('test');
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
