// src/other/dom-event-utils.test.js

const { addEventListener } = require('./dom-event-utils');

describe('DOM Event Utils', () => {
  let mockElement;
  let mockListener;
  let consoleWarnSpy;

  beforeEach(() => {
    mockElement = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(), // Also mock remove for completeness, though not used in addEventListener
    };
    mockListener = jest.fn();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  test('should attach an event listener to a valid element', () => {
    addEventListener(mockElement, 'click', mockListener);
    expect(mockElement.addEventListener).toHaveBeenCalledTimes(1);
    expect(mockElement.addEventListener).toHaveBeenCalledWith('click', mockListener, undefined);
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  test('should attach an event listener with options', () => {
    const options = { once: true, capture: true };
    addEventListener(mockElement, 'mouseover', mockListener, options);
    expect(mockElement.addEventListener).toHaveBeenCalledTimes(1);
    expect(mockElement.addEventListener).toHaveBeenCalledWith('mouseover', mockListener, options);
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  test('should not attach a listener if element is null or undefined', () => {
    addEventListener(null, 'click', mockListener);
    expect(mockElement.addEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);

    consoleWarnSpy.mockClear();
    addEventListener(undefined, 'click', mockListener);
    expect(mockElement.addEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });

  test('should not attach a listener if element does not have addEventListener method', () => {
    const invalidElement = {};
    addEventListener(invalidElement, 'click', mockListener);
    expect(mockElement.addEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });

  test('should not attach a listener if eventType is invalid', () => {
    addEventListener(mockElement, null, mockListener);
    expect(mockElement.addEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);

    consoleWarnSpy.mockClear();
    addEventListener(mockElement, '', mockListener);
    expect(mockElement.addEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });

  test('should not attach a listener if listener is invalid', () => {
    addEventListener(mockElement, 'click', null);
    expect(mockElement.addEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);

    consoleWarnSpy.mockClear();
    addEventListener(mockElement, 'click', 'not a function');
    expect(mockElement.addEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});
