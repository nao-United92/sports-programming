import { setTextContent } from './dom-text-utils';

describe('setTextContent', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement"></div>';
    element = document.getElementById('testElement');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should set the text content of an element', () => {
    setTextContent(element, 'Hello World');
    expect(element.textContent).toBe('Hello World');
  });

  test('should overwrite existing text content', () => {
    element.textContent = 'Old Text';
    setTextContent(element, 'New Text');
    expect(element.textContent).toBe('New Text');
  });

  test('should handle empty string as text content', () => {
    setTextContent(element, '');
    expect(element.textContent).toBe('');
  });

  test('should handle null as text content (set to empty string)', () => {
    setTextContent(element, null);
    expect(element.textContent).toBe('');
  });

  test('should handle undefined as text content (set to empty string)', () => {
    setTextContent(element, undefined);
    expect(element.textContent).toBe('');
  });

  test('should handle number as text content', () => {
    setTextContent(element, 123);
    expect(element.textContent).toBe('123');
  });

  test('should warn and return if a non-HTMLElement is provided', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    setTextContent(null, 'test');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to setTextContent.', null);
    expect(element.textContent).toBe(''); // Should not change original element

    setTextContent(undefined, 'test');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to setTextContent.', undefined);
    expect(element.textContent).toBe('');

    setTextContent({}, 'test');
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to setTextContent.', {});
    expect(element.textContent).toBe('');

    consoleWarnSpy.mockRestore();
  });
});
