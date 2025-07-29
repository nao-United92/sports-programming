import { addEventListener, removeEventListener, dispatchCustomEvent, addOneTimeEventListener, on, off } from './event-listener-utils.js';

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

  describe('on', () => {
    test('should add an event listener using on', () => {
      on(element, 'click', listener);
      element.click();
      expect(listener).toHaveBeenCalledTimes(1);
    });

    test('should not add listener if element is null using on', () => {
      on(null, 'click', listener);
      // No error should be thrown
    });
  });

  describe('off', () => {
    test('should remove an event listener using off', () => {
      on(element, 'click', listener);
      off(element, 'click', listener);
      element.click();
      expect(listener).not.toHaveBeenCalled();
    });

    test('should not remove listener if element is null using off', () => {
      off(null, 'click', listener);
      // No error should be thrown
    });
  });

  describe('onClickOutside', () => {
    let outsideElement;

    beforeEach(() => {
      outsideElement = document.createElement('div');
      document.body.appendChild(outsideElement);
    });

    afterEach(() => {
      document.body.removeChild(outsideElement);
    });

    test('should call callback when clicking outside the element', () => {
      const removeListener = onClickOutside(element, listener);
      outsideElement.click();
      expect(listener).toHaveBeenCalledTimes(1);
      removeListener(); // Clean up the event listener
    });

    test('should not call callback when clicking inside the element', () => {
      const removeListener = onClickOutside(element, listener);
      element.click();
      expect(listener).not.toHaveBeenCalled();
      removeListener(); // Clean up the event listener
    });

    test('should not call callback when clicking on the element itself', () => {
      const removeListener = onClickOutside(element, listener);
      element.click();
      expect(listener).not.toHaveBeenCalled();
      removeListener(); // Clean up the event listener
    });

    test('should remove the event listener when the returned function is called', () => {
      const removeListener = onClickOutside(element, listener);
      removeListener();
      outsideElement.click();
      expect(listener).not.toHaveBeenCalled();
    });

    test('should not throw error if element is null', () => {
      onClickOutside(null, listener);
      outsideElement.click();
      // No error should be thrown
    });
  });
});
