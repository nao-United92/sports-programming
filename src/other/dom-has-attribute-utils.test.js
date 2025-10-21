import { hasAttribute } from './dom-has-attribute-utils.js';

describe('hasAttribute', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('data-test', 'value');
  });

  test('should return true if element has the attribute', () => {
    expect(hasAttribute(element, 'data-test')).toBe(true);
  });

  test('should return false if element does not have the attribute', () => {
    expect(hasAttribute(element, 'non-existent')).toBe(false);
  });

  test('should return false if element is null', () => {
    expect(hasAttribute(null, 'data-test')).toBe(false);
  });

  test('should return false if attributeName is empty', () => {
    expect(hasAttribute(element, '')).toBe(false);
  });
});
