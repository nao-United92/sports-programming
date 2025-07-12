import { setTextContent, setInnerHtml, addClass, removeClass, toggleClass, setStyles } from './dom-manipulation-utils.js';

describe('dom-manipulation-utils', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('should set text content', () => {
    setTextContent(el, 'Hello');
    expect(el.textContent).toBe('Hello');
  });

  it('should set inner HTML', () => {
    setInnerHtml(el, '<span>Hello</span>');
    expect(el.innerHTML).toBe('<span>Hello</span>');
  });

  it('should add a class', () => {
    addClass(el, 'test');
    expect(el.classList.contains('test')).toBe(true);
  });

  it('should remove a class', () => {
    addClass(el, 'test');
    removeClass(el, 'test');
    expect(el.classList.contains('test')).toBe(false);
  });

  it('should toggle a class', () => {
    toggleClass(el, 'test');
    expect(el.classList.contains('test')).toBe(true);
    toggleClass(el, 'test');
    expect(el.classList.contains('test')).toBe(false);
  });

  it('should set styles', () => {
    setStyles(el, { color: 'red', backgroundColor: 'blue' });
    expect(el.style.color).toBe('red');
    expect(el.style.backgroundColor).toBe('blue');
  });
});
