import { createElement } from './dom-utils.js';

describe('createElement', () => {
  it('should create a simple element', () => {
    const el = createElement('div');
    expect(el.tagName).toBe('DIV');
  });

  it('should create an element with attributes', () => {
    const el = createElement('a', { href: '#', id: 'myLink' });
    expect(el.getAttribute('href')).toBe('#');
    expect(el.id).toBe('myLink');
  });

  it('should create an element with text content', () => {
    const el = createElement('p', {}, 'Hello world');
    expect(el.textContent).toBe('Hello world');
  });

  it('should create an element with child elements', () => {
    const child = createElement('span', {}, 'content');
    const parent = createElement('div', { class: 'parent' }, child);
    expect(parent.classList.contains('parent')).toBe(true);
    expect(parent.children.length).toBe(1);
    expect(parent.children[0].tagName).toBe('SPAN');
    expect(parent.children[0].textContent).toBe('content');
  });
});