import { on, off, trigger } from './event-utils';

describe('Event Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  describe('on', () => {
    it('should attach an event listener', () => {
      const handler = jest.fn();
      on(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe('off', () => {
    it('should remove an event listener', () => {
      const handler = jest.fn();
      on(element, 'click', handler);
      off(element, 'click', handler);
      element.click();
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('trigger', () => {
    it('should trigger a custom event', () => {
      const handler = jest.fn();
      on(element, 'my-event', handler);
      trigger(element, 'my-event', { a: 1 });
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0].detail).toEqual({ a: 1 });
    });
  });
});
