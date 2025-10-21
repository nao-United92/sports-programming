import { setTextContent } from './dom-set-text-content-utils.js';

describe('setTextContent', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  test('should set the text content of an element', () => {
    setTextContent(element, 'Hello World');
    expect(element.textContent).toBe('Hello World');
  });

  test('should set empty string if text is null or undefined', () => {
    setTextContent(element, null);
    expect(element.textContent).toBe(''); // Changed from 'null' to ''
    setTextContent(element, undefined);
    expect(element.textContent).toBe(''); // Changed from 'undefined' to ''
  });

  test('should not set text content if element is null', () => {
    setTextContent(null, 'Hello World');
    expect(element.textContent).toBe('');
  });
});