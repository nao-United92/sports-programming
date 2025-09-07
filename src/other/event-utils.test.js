import { on, off, delegate } from './event-utils.js';

describe('Event Utilities', () => {
  let element;
  let handler;

  beforeEach(() => {
    // Mock element with addEventListener and removeEventListener
    element = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
    handler = jest.fn();
  });

  describe('on', () => {
    it('should attach an event listener to an element', () => {
      on(element, 'click', handler);
      expect(element.addEventListener).toHaveBeenCalledWith('click', handler, {});
    });

    it('should attach an event listener with options', () => {
      const options = { once: true };
      on(element, 'click', handler, options);
      expect(element.addEventListener).toHaveBeenCalledWith('click', handler, options);
    });
  });

  describe('off', () => {
    it('should remove an event listener from an element', () => {
      off(element, 'click', handler);
      expect(element.removeEventListener).toHaveBeenCalledWith('click', handler, {});
    });

    it('should remove an event listener with options', () => {
      const options = { capture: true };
      off(element, 'click', handler, options);
      expect(element.removeEventListener).toHaveBeenCalledWith('click', handler, options);
    });
  });

  describe('delegate', () => {
    let parentElement;
    let childElement;
    let event;

    beforeEach(() => {
      // Mock parent and child elements for delegation
      childElement = { matches: jest.fn().mockReturnValue(true) };
      parentElement = {
        addEventListener: jest.fn((evt, cb) => {
          // Simulate the event callback
          event = { target: childElement };
          cb(event);
        }),
      };
    });

    it('should attach a delegated event listener', () => {
      delegate(parentElement, '.child', 'click', handler);
      expect(parentElement.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
    });

    it('should call the handler if the target matches the selector', () => {
      delegate(parentElement, '.child', 'click', handler);
      expect(childElement.matches).toHaveBeenCalledWith('.child');
      expect(handler).toHaveBeenCalledWith(event);
    });

    it('should not call the handler if the target does not match the selector', () => {
      childElement.matches.mockReturnValue(false);
      delegate(parentElement, '.child', 'click', handler);
      expect(childElement.matches).toHaveBeenCalledWith('.child');
      expect(handler).not.toHaveBeenCalled();
    });
  });
});