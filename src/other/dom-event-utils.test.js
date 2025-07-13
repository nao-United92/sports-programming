
import { dispatchCustomEvent } from './dom-event-utils';

describe('dispatchCustomEvent', () => {
  let element;
  let handler;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
    handler = jest.fn();
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('should dispatch a custom event with detail', () => {
    const eventName = 'myCustomEvent';
    const eventDetail = { data: 'test' };

    element.addEventListener(eventName, handler);
    dispatchCustomEvent(element, eventName, eventDetail);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(CustomEvent));
    expect(handler.mock.calls[0][0].detail).toEqual(eventDetail);
    expect(handler.mock.calls[0][0].type).toBe(eventName);
    expect(handler.mock.calls[0][0].bubbles).toBe(true);
    expect(handler.mock.calls[0][0].cancelable).toBe(true);
  });

  test('should dispatch a custom event without detail', () => {
    const eventName = 'anotherEvent';

    element.addEventListener(eventName, handler);
    dispatchCustomEvent(element, eventName);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({});
  });

  test('should not dispatch if element is invalid', () => {
    const eventName = 'invalidEvent';
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    dispatchCustomEvent(null, eventName);
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(handler).not.toHaveBeenCalled();

    consoleWarnSpy.mockRestore();
  });
});
