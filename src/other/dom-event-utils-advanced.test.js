// src/other/dom-event-utils-advanced.test.js

const { removeEventListener } = require('./dom-event-utils-advanced');

describe('DOM Event Utils Advanced', () => {
  let mockElement;
  let mockListener;
  let consoleWarnSpy;

  beforeEach(() => {
    mockElement = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
    mockListener = jest.fn();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleWarnSpy.mockRestore();
  });

  test('should remove an event listener from a valid element', () => {
    removeEventListener(mockElement, 'click', mockListener);
    expect(mockElement.removeEventListener).toHaveBeenCalledTimes(1);
    expect(mockElement.removeEventListener).toHaveBeenCalledWith('click', mockListener, undefined);
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  test('should remove an event listener with options', () => {
    const options = { capture: true };
    removeEventListener(mockElement, 'mouseover', mockListener, options);
    expect(mockElement.removeEventListener).toHaveBeenCalledTimes(1);
    expect(mockElement.removeEventListener).toHaveBeenCalledWith('mouseover', mockListener, options);
    expect(consoleWarnSpy).not.toHaveBeenCalled();
  });

  test('should not attempt to remove a listener if element is null or undefined', () => {
    removeEventListener(null, 'click', mockListener);
    expect(mockElement.removeEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);

    consoleWarnSpy.mockClear();
    removeEventListener(undefined, 'click', mockListener);
    expect(mockElement.removeEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });

  test('should not attempt to remove a listener if element does not have removeEventListener method', () => {
    const invalidElement = {};
    removeEventListener(invalidElement, 'click', mockListener);
    expect(mockElement.removeEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });

  test('should not attempt to remove a listener if eventType is invalid', () => {
    removeEventListener(mockElement, null, mockListener);
    expect(mockElement.removeEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);

    consoleWarnSpy.mockClear();
    removeEventListener(mockElement, '', mockListener);
    expect(mockElement.removeEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });

  test('should not attempt to remove a listener if listener is invalid', () => {
    removeEventListener(mockElement, 'click', null);
    expect(mockElement.removeEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);

    consoleWarnSpy.mockClear();
    removeEventListener(mockElement, 'click', 'not a function');
    expect(mockElement.removeEventListener).not.toHaveBeenCalled();
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});
