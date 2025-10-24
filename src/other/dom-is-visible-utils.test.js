
import { isVisible } from './dom-is-visible-utils';

describe('isVisible', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('should return true for a visible element', () => {
    const el = document.createElement('div');
    container.appendChild(el);
    expect(isVisible(el)).toBe(true);
  });

  test('should return false for an element with display: none', () => {
    const el = document.createElement('div');
    el.style.display = 'none';
    container.appendChild(el);
    expect(isVisible(el)).toBe(false);
  });

  test('should return false for an element with visibility: hidden', () => {
    const el = document.createElement('div');
    el.style.visibility = 'hidden';
    container.appendChild(el);
    expect(isVisible(el)).toBe(false);
  });

  test('should return false for an element with opacity: 0', () => {
    const el = document.createElement('div');
    el.style.opacity = '0';
    container.appendChild(el);
    expect(isVisible(el)).toBe(false);
  });

  test('should return false for an element with zero width and height', () => {
    const el = document.createElement('div');
    el.style.width = '0';
    el.style.height = '0';
    container.appendChild(el);
    expect(isVisible(el)).toBe(false);
  });

  test('should return false if a parent element has display: none', () => {
    const parent = document.createElement('div');
    parent.style.display = 'none';
    const child = document.createElement('span');
    parent.appendChild(child);
    container.appendChild(parent);
    expect(isVisible(child)).toBe(false);
  });

  test('should return false if a parent element has visibility: hidden', () => {
    const parent = document.createElement('div');
    parent.style.visibility = 'hidden';
    const child = document.createElement('span');
    parent.appendChild(child);
    container.appendChild(parent);
    expect(isVisible(child)).toBe(false);
  });

  test('should return false if a parent element has opacity: 0', () => {
    const parent = document.createElement('div');
    parent.style.opacity = '0';
    const child = document.createElement('span');
    parent.appendChild(child);
    container.appendChild(parent);
    expect(isVisible(child)).toBe(false);
  });

  test('should return false for non-HTMLElement inputs', () => {
    expect(isVisible(null)).toBe(false);
    expect(isVisible(undefined)).toBe(false);
    expect(isVisible({})).toBe(false);
    expect(isVisible(document.createTextNode('text'))).toBe(false);
  });
});
