import { getAttribute } from './dom-attribute-utils';

describe('getAttribute', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement" data-test="value1" class="my-class"></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should return the value of an existing attribute', () => {
    expect(getAttribute(element, 'data-test')).toBe('value1');
    expect(getAttribute(element, 'id')).toBe('testElement');
    expect(getAttribute(element, 'class')).toBe('my-class');
  });

  test('should return null for a non-existing attribute', () => {
    expect(getAttribute(element, 'non-existent-attr')).toBeNull();
  });

  test('should return null for a null element', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getAttribute(null, 'data-test')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to getAttribute.', null);
    consoleWarnSpy.mockRestore();
  });

  test('should return null for an undefined element', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getAttribute(undefined, 'data-test')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to getAttribute.', undefined);
    consoleWarnSpy.mockRestore();
  });

  test('should return null for a non-HTMLElement object', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(getAttribute({}, 'data-test')).toBeNull();
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to getAttribute.', {});
    consoleWarnSpy.mockRestore();
  });

  test('should return null if attributeName is null or undefined', () => {
    expect(getAttribute(element, null)).toBeNull();
    expect(getAttribute(element, undefined)).toBeNull();
  });
});
