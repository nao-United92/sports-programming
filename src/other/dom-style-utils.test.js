import { setStyle } from './dom-style-utils';

describe('setStyle', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement"></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should set a single style property', () => {
    setStyle(element, 'color', 'red');
    expect(element.style.color).toBe('red');
  });

  test('should set a camelCase style property', () => {
    setStyle(element, 'backgroundColor', 'blue');
    expect(element.style.backgroundColor).toBe('blue');
  });

  test('should overwrite an existing style property', () => {
    element.style.color = 'blue';
    setStyle(element, 'color', 'green');
    expect(element.style.color).toBe('green');
  });

  test('should set a numeric value (converted to string)', () => {
    setStyle(element, 'zIndex', 10);
    expect(element.style.zIndex).toBe('10');
  });

  test('should handle empty string value', () => {
    setStyle(element, 'display', '');
    expect(element.style.display).toBe('');
  });

  test('should warn and return if a non-HTMLElement is provided', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    setStyle(null, 'color', 'red');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to setStyle.', null);

    setStyle(undefined, 'color', 'red');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to setStyle.', undefined);

    setStyle({}, 'color', 'red');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to setStyle.', {});

    consoleWarnSpy.mockRestore();
    expect(element.style.color).toBe(''); // Ensure original element is not affected
  });

  test('should warn and return if an invalid property name is provided', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    setStyle(element, null, 'red');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid style property name provided to setStyle.', null);

    setStyle(element, undefined, 'red');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid style property name provided to setStyle.', undefined);

    setStyle(element, '', 'red');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid style property name provided to setStyle.', '');

    setStyle(element, 123, 'red');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid style property name provided to setStyle.', 123);

    consoleWarnSpy.mockRestore();
    expect(element.style.color).toBe(''); // Ensure original element is not affected
  });
});
