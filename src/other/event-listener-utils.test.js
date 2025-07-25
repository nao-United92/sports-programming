import { addEventListener, removeEventListener, dispatchCustomEvent, addOneTimeEventListener } from './event-listener-utils.js';

describe('event-listener-utils', () => {
  let element;
  let listener;

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

  describe('dispatchCustomEvent', () => {
    test('should dispatch a custom event', () => {
      const customEventType = 'myCustomEvent';
      const detail = { data: 'test' };

      element.addEventListener(customEventType, listener);
      dispatchCustomEvent(element, customEventType, detail);

      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith(expect.any(CustomEvent));
      expect(listener.mock.calls[0][0].detail).toEqual(detail);
    });

    test('should dispatch a custom event with default options', () => {
      const customEventType = 'anotherCustomEvent';
      element.addEventListener(customEventType, listener);
      dispatchCustomEvent(element, customEventType);

      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener.mock.calls[0][0].bubbles).toBe(true);
      expect(listener.mock.calls[0][0].cancelable).toBe(true);
    });

    test('should not dispatch event if element is null', () => {
      dispatchCustomEvent(null, 'myCustomEvent', {});
      // No error should be thrown
    });
  });

  describe('addOneTimeEventListener', () => {
    test('should add an event listener that fires only once', () => {
      const mockListener = jest.fn();
      addOneTimeEventListener(element, 'click', mockListener);

      element.click();
      element.click(); // Click again

      expect(mockListener).toHaveBeenCalledTimes(1);
    });

    test('should pass options correctly', () => {
      const mockListener = jest.fn();
      const options = { capture: true };
      const addSpy = jest.spyOn(element, 'addEventListener');

      addOneTimeEventListener(element, 'click', mockListener, options);

      expect(addSpy).toHaveBeenCalledWith('click', mockListener, { ...options, once: true });
      addSpy.mockRestore();
    });

    test('should not add listener if element is null', () => {
      const mockListener = jest.fn();
      addOneTimeEventListener(null, 'click', mockListener);
      // No error should be thrown
    });
  });
});