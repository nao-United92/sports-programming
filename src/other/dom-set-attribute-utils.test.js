import { setAttribute } from './dom-set-attribute-utils.js';

describe('setAttribute', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  test('should set an attribute on the element', () => {
    setAttribute(element, 'data-test', 'value');
    expect(element.getAttribute('data-test')).toBe('value');
  });

  test('should update an existing attribute', () => {
    element.setAttribute('data-test', 'old-value');
    setAttribute(element, 'data-test', 'new-value');
    expect(element.getAttribute('data-test')).toBe('new-value');
  });

  test('should not set attribute if element is null', () => {
    setAttribute(null, 'data-test', 'value');
    expect(element.getAttribute('data-test')).toBeNull();
  });

  test('should not set attribute if attributeName is empty', () => {
    setAttribute(element, '', 'value');
    expect(element.hasAttributes()).toBe(false);
  });
});
