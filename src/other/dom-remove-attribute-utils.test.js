import { removeAttribute } from './dom-remove-attribute-utils.js';

describe('removeAttribute', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('data-test', 'value');
  });

  test('should remove an attribute from the element', () => {
    removeAttribute(element, 'data-test');
    expect(element.hasAttribute('data-test')).toBe(false);
  });

  test('should not remove attribute if element is null', () => {
    removeAttribute(null, 'data-test');
    expect(element.hasAttribute('data-test')).toBe(true);
  });

  test('should not remove attribute if attributeName is empty', () => {
    removeAttribute(element, '');
    expect(element.hasAttribute('data-test')).toBe(true);
  });
});
