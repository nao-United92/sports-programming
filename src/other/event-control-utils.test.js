import { once, stop } from './event-control-utils';

describe('Event Control Utilities', () => {
  describe('once', () => {
    it('should call the listener only once', () => {
      const target = new EventTarget();
      const listener = jest.fn();
      
      once(target, 'click', listener);
      
      target.dispatchEvent(new Event('click'));
      target.dispatchEvent(new Event('click'));
      
      expect(listener).toHaveBeenCalledTimes(1);
    });
  });

  describe('stop', () => {
    it('should call preventDefault and stopPropagation', () => {
      const event = new Event('click', { bubbles: true, cancelable: true });
      event.preventDefault = jest.fn();
      event.stopPropagation = jest.fn();
      
      stop(event);
      
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    });
  });
});
