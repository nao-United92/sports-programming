import { isElement } from './is-element-utils';

describe('isElement', () => {
  it('should return true for a DOM element', () => {
    const div = document.createElement('div');
    expect(isElement(div)).toBe(true);
    const span = document.createElement('span');
    expect(isElement(span)).toBe(true);
  });

  it('should return false for non-element nodes', () => {
    const textNode = document.createTextNode('hello');
    expect(isElement(textNode)).toBe(false);
    const commentNode = document.createComment('comment');
    expect(isElement(commentNode)).toBe(false);
  });

  it('should return false for non-object types', () => {
    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
    expect(isElement(123)).toBe(false);
    expect(isElement('string')).toBe(false);
    expect(isElement(true)).toBe(false);
    expect(isElement(Symbol('a'))).toBe(false);
  });

  it('should return false for plain objects', () => {
    expect(isElement({})).toBe(false);
    expect(isElement({ nodeType: 1, nodeName: 'DIV' })).toBe(false); // Not a real DOM element
  });

  it('should return false for functions', () => {
    expect(isElement(() => {})).toBe(false);
  });
});
