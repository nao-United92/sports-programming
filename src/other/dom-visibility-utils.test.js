import { toggle, show, hide } from './dom-visibility-utils';

describe('toggle', () => {
  let element;

  beforeEach(() => {
    // 各テストの前に新しいDOM要素を作成
    document.body.innerHTML = '<div id="testElement" style="display: block;"></div>';
    element = document.getElementById('testElement');
  });

  test('should hide an element if it is visible', () => {
    toggle(element);
    expect(element.style.display).toBe('none');
  });

  test('should show an element if it is hidden', () => {
    element.style.display = 'none';
    toggle(element);
    expect(element.style.display).toBe('block');
  });

  test('should use default display style if not provided', () => {
    element.style.display = 'none';
    toggle(element);
    expect(element.style.display).toBe('block');
  });

  test('should use custom display style if provided', () => {
    element.style.display = 'none';
    toggle(element, 'flex');
    expect(element.style.display).toBe('flex');
  });

  test('should not change display if element is already hidden and displayStyle is different', () => {
    element.style.display = 'none';
    toggle(element, 'inline');
    expect(element.style.display).toBe('inline'); // It should become inline, not stay none
  });

  test('should handle non-HTMLElement input gracefully', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    toggle(null);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggle.', null);
    toggle(undefined);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggle.', undefined);
    toggle({});
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggle.', {});
    consoleWarnSpy.mockRestore();
  });
});

describe('show', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement" style="display: none;"></div>';
    element = document.getElementById('testElement');
  });

  test('should show an element with default display style', () => {
    show(element);
    expect(element.style.display).toBe('block');
  });

  test('should show an element with custom display style', () => {
    show(element, 'inline-block');
    expect(element.style.display).toBe('inline-block');
  });

  test('should handle non-HTMLElement input gracefully', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    show(null);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to show.', null);
    consoleWarnSpy.mockRestore();
  });
});

describe('hide', () => {
  let element;

  beforeEach(() => {
    document.body.innerHTML = '<div id="testElement" style="display: block;"></div>';
    element = document.getElementById('testElement');
  });

  test('should hide an element', () => {
    hide(element);
    expect(element.style.display).toBe('none');
  });

  test('should handle non-HTMLElement input gracefully', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    hide(null);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to hide.', null);
    consoleWarnSpy.mockRestore();
  });
});
