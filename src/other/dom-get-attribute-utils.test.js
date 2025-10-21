import { getAttribute } from './dom-get-attribute-utils.js';

describe('getAttribute', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('data-test', 'value');
  });

  test('should return the attribute value if it exists', () => {
    expect(getAttribute(element, 'data-test')).toBe('value');
  });

  test('should return null if the attribute does not exist', () => {
    expect(getAttribute(element, 'non-existent')).toBeNull();
  });

  test('should return null if element is null', () => {
    expect(getAttribute(null, 'data-test')).toBeNull();
  });

  test('should return null if attributeName is empty', () => {
    expect(getAttribute(element, '')).toBeNull();
  });
});
