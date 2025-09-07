import { on, off, once } from './dom-event-utils.js';

describe('DOM Event Utilities', () => {
  let mockElement;
  let mockHandler;

  beforeEach(() => {
    mockHandler = jest.fn();
    mockElement = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn((event) => {
        // Simulate event dispatching by calling registered listeners
        const listeners = mockElement.addEventListener.mock.calls.filter(
          (call) => call[0] === event.type
        ).map((call) => call[1]);
        listeners.forEach((listener) => listener(event));
      }),
    };
  });

  describe('on', () => {
    it('should add an event listener', () => {
      on(mockElement, 'click', mockHandler);
      expect(mockElement.addEventListener).toHaveBeenCalledWith('click', mockHandler, undefined);
    });

    it('should add an event listener with options', () => {
      const options = { capture: true };
      on(mockElement, 'click', mockHandler, options);
      expect(mockElement.addEventListener).toHaveBeenCalledWith('click', mockHandler, options);
    });
  });

  describe('off', () => {
    it('should remove an event listener', () => {
      off(mockElement, 'click', mockHandler);
      expect(mockElement.removeEventListener).toHaveBeenCalledWith('click', mockHandler, undefined);
    });

    it('should remove an event listener with options', () => {
      const options = { capture: true };
      off(mockElement, 'click', mockHandler, options);
      expect(mockElement.removeEventListener).toHaveBeenCalledWith('click', mockHandler, options);
    });
  });

  describe('once', () => {
    it('should call the handler once and then remove the listener', () => {
      once(mockElement, 'click', mockHandler);

      // Simulate first click
      const clickEvent1 = new Event('click');
      mockElement.dispatchEvent(clickEvent1);
      expect(mockHandler).toHaveBeenCalledTimes(1);
      expect(mockElement.removeEventListener).toHaveBeenCalledTimes(1);

      // Simulate second click - handler should not be called again
      const clickEvent2 = new Event('click');
      mockElement.dispatchEvent(clickEvent2);
      expect(mockHandler).toHaveBeenCalledTimes(1);
      expect(mockElement.removeEventListener).toHaveBeenCalledTimes(2);
    });

    it('should pass event object to the handler', () => {
      once(mockElement, 'click', mockHandler);
      const clickEvent = new Event('click');
      mockElement.dispatchEvent(clickEvent);
      expect(mockHandler).toHaveBeenCalledWith(clickEvent);
    });

    it('should pass options to addEventListener and removeEventListener', () => {
      const options = { capture: true };
      once(mockElement, 'click', mockHandler, options);
      expect(mockElement.addEventListener).toHaveBeenCalledWith('click', expect.any(Function), options);

      const clickEvent = new Event('click');
      mockElement.dispatchEvent(clickEvent);
      expect(mockElement.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function), options);
    });
  });
});