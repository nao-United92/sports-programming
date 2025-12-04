import { on, off } from './dom-event-utils.js';

describe('DOM Event Utilities', () => {
  let element;
  let handler;

  beforeEach(() => {
    // Create a mock DOM element for testing
    element = document.createElement('button');
    handler = jest.fn();
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Clean up the mock DOM element
    document.body.removeChild(element);
  });

  describe('on', () => {
    it('should add an event listener to the element', () => {
      on(element, 'click', handler);
      element.click(); // Simulate a click event
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('should not add an event listener if element is null/undefined', () => {
      on(null, 'click', handler);
      element.click();
      expect(handler).not.toHaveBeenCalled();
    });

    it('should pass event object to the handler', () => {
      on(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledWith(expect.any(MouseEvent));
    });
  });

  describe('off', () => {
    it('should remove an event listener from the element', () => {
      on(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);

      off(element, 'click', handler);
      element.click(); // Simulate another click event
      expect(handler).toHaveBeenCalledTimes(1); // Should not be called again
    });

    it('should not remove an event listener if element is null/undefined', () => {
      on(element, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(1);

      off(null, 'click', handler);
      element.click();
      expect(handler).toHaveBeenCalledTimes(2); // Should still be called
    });
  });
});