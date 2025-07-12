import { selectElement, selectAllElements, createElement, appendChild, removeElement } from './dom-utils.js';

describe('dom-utils', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should select a single element', () => {
    document.body.innerHTML = '<div id="test"></div>';
    const el = selectElement('#test');
    expect(el).not.toBeNull();
    expect(el.id).toBe('test');
  });

  it('should select all elements', () => {
    document.body.innerHTML = '<div class="test"></div><div class="test"></div>';
    const elements = selectAllElements('.test');
    expect(elements.length).toBe(2);
  });

  it('should create an element', () => {
    const el = createElement('div', { id: 'test' }, ['Hello']);
    expect(el.tagName).toBe('DIV');
    expect(el.id).toBe('test');
    expect(el.textContent).toBe('Hello');
  });

  it('should append a child', () => {
    const parent = createElement('div');
    const child = createElement('span');
    appendChild(parent, child);
    expect(parent.children.length).toBe(1);
    expect(parent.children[0].tagName).toBe('SPAN');
  });

  it('should remove an element', () => {
    const el = createElement('div');
    document.body.appendChild(el);
    removeElement(el);
    expect(document.body.children.length).toBe(0);
  });
});
