import { toggleVisibility } from './dom-visibility-utils';

describe('toggleVisibility', () => {
  let element;

  beforeEach(() => {
    // 各テストの前に新しいDOM要素を作成
    document.body.innerHTML = '<div id="testElement" style="display: block;"></div>';
    element = document.getElementById('testElement');
  });

  test('should hide an element if it is visible', () => {
    toggleVisibility(element);
    expect(element.style.display).toBe('none');
  });

  test('should show an element if it is hidden', () => {
    element.style.display = 'none';
    toggleVisibility(element);
    expect(element.style.display).toBe('block');
  });

  test('should use default display style if not provided', () => {
    element.style.display = 'none';
    toggleVisibility(element);
    expect(element.style.display).toBe('block');
  });

  test('should use custom display style if provided', () => {
    element.style.display = 'none';
    toggleVisibility(element, 'flex');
    expect(element.style.display).toBe('flex');
  });

  test('should not change display if element is already hidden and displayStyle is different', () => {
    element.style.display = 'none';
    toggleVisibility(element, 'inline');
    expect(element.style.display).toBe('inline'); // It should become inline, not stay none
  });

  test('should handle non-HTMLElement input gracefully', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    toggleVisibility(null);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggleVisibility.', null);
    toggleVisibility(undefined);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggleVisibility.', undefined);
    toggleVisibility({});
    expect(consoleWarnSpy).toHaveBeenCalledWith('Invalid element provided to toggleVisibility.', {});
    consoleWarnSpy.mockRestore();
  });
});
