const { triggerEvent } = require('./dom-event-trigger-utils.js');

describe('triggerEvent', () => {
  let element, handler;

  beforeEach(() => {
    document.body.innerHTML = `<div id="test-element"></div>`;
    element = document.getElementById('test-element');
    handler = jest.fn();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should trigger a custom event on the element', () => {
    element.addEventListener('myCustomEvent', handler);
    triggerEvent(element, 'myCustomEvent');
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith(expect.any(CustomEvent));
  });

  test('should pass custom detail data to the event', () => {
    element.addEventListener('myCustomEvent', handler);
    const detailData = { value: 123, text: 'hello' };
    triggerEvent(element, 'myCustomEvent', detailData);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual(detailData);
  });

  test('should allow event to bubble by default', () => {
    const parent = document.createElement('div');
    parent.id = 'parent';
    parent.appendChild(element);
    document.body.appendChild(parent);

    parent.addEventListener('myCustomEvent', handler);
    triggerEvent(element, 'myCustomEvent');
    expect(handler).toHaveBeenCalledTimes(1);
  });

  test('should prevent event from bubbling if bubbles is false', () => {
    const parent = document.createElement('div');
    parent.id = 'parent';
    parent.appendChild(element);
    document.body.appendChild(parent);

    parent.addEventListener('myCustomEvent', handler);
    triggerEvent(element, 'myCustomEvent', {}, false);
    expect(handler).not.toHaveBeenCalled();
  });

  test('should allow event to be cancelable by default', () => {
    element.addEventListener('myCustomEvent', (e) => e.preventDefault());
    const result = triggerEvent(element, 'myCustomEvent');
    expect(result).toBe(false); // dispatchEvent returns false if preventDefault is called
  });

  test('should not be cancelable if cancelable is false', () => {
    element.addEventListener('myCustomEvent', (e) => e.preventDefault());
    const result = triggerEvent(element, 'myCustomEvent', {}, true, false);
    expect(result).toBe(true); // dispatchEvent returns true even if preventDefault is called
  });

  test('should warn and return false for invalid element', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const result = triggerEvent(null, 'myCustomEvent');
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe(false);
    warnSpy.mockRestore();
  });
});
