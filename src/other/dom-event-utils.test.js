
import { addEventListener, removeEventListener, addEventListenerOnce, dispatchCustomEvent } from './dom-event-utils';

describe('dom-event-utils', () => {
  let element;
  let handler;

  beforeEach(() => {
    element = document.createElement('div');
    listener = jest.fn();
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('addEventListener', () => {
    test('should add an event listener', () => {
      addEventListener(element, 'click', listener);
      element.click();
      expect(listener).toHaveBeenCalledTimes(1);
    });

    test('should not add listener if element is null', () => {
      addEventListener(null, 'click', listener);
      // No error should be thrown
    });
  });

  describe('removeEventListener', () => {
    test('should remove an event listener', () => {
      addEventListener(element, 'click', listener);
      removeEventListener(element, 'click', listener);
      element.click();
      expect(listener).not.toHaveBeenCalled();
    });

    test('should not remove listener if element is null', () => {
      removeEventListener(null, 'click', listener);
      // No error should be thrown
    });
  });

  describe('addEventListenerOnce', () => {
    test('should add an event listener that fires only once', () => {
      addEventListenerOnce(element, 'click', listener);
      element.click();
      element.click(); // Second click should not trigger the listener again
      expect(listener).toHaveBeenCalledTimes(1);
    });

    test('should pass options to addEventListener', () => {
      const spy = jest.spyOn(element, 'addEventListener');
      addEventListenerOnce(element, 'click', listener, { capture: true });
      expect(spy).toHaveBeenCalledWith('click', listener, { capture: true, once: true });
      spy.mockRestore();
    });

    test('should not add listener if element is null', () => {
      addEventListenerOnce(null, 'click', listener);
      // No error should be thrown
    });
  });

  describe('dispatchCustomEvent', () => {
    test('should dispatch a custom event with detail', () => {
      const customEventType = 'myCustomEvent';
      const eventDetail = { data: 'test' };

      element.addEventListener(customEventType, listener);
      dispatchCustomEvent(element, customEventType, eventDetail);

      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith(expect.any(CustomEvent));
      expect(listener.mock.calls[0][0].detail).toEqual(eventDetail);
      expect(listener.mock.calls[0][0].type).toBe(customEventType);
      expect(listener.mock.calls[0][0].bubbles).toBe(true);
      expect(listener.mock.calls[0][0].cancelable).toBe(true);
    });

    test('should dispatch a custom event without detail', () => {
      const customEventType = 'anotherEvent';

      element.addEventListener(customEventType, listener);
      dispatchCustomEvent(element, customEventType);

      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener.mock.calls[0][0].detail).toEqual({});
    });

    test('should not dispatch if element is invalid', () => {
      const eventName = 'invalidEvent';
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

      dispatchCustomEvent(null, eventName);
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      expect(listener).not.toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });
  });

  describe('preventDefault', () => {
    test('should call preventDefault on the event object', () => {
      const mockEvent = { preventDefault: jest.fn() };
      preventDefault(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    test('should not throw error if event is null or undefined', () => {
      expect(() => preventDefault(null)).not.toThrow();
      expect(() => preventDefault(undefined)).not.toThrow();
    });

    test('should not throw error if event.preventDefault is not a function', () => {
      const mockEvent = {};
      expect(() => preventDefault(mockEvent)).not.toThrow();
    });
  });
});
