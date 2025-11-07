import { toggleVisibility } from './dom-visibility-utils.js';

describe('toggleVisibility', () => {
  let element;

  beforeEach(() => {
    // Create a mock DOM element for testing
    document.body.innerHTML = '<div id="test-element" style="display: block;">Hello</div>';
    element = document.getElementById('test-element');
  });

  afterEach(() => {
    document.body.innerHTML = ''; // Clean up DOM
  });

  it('should hide a visible element', () => {
    expect(element.style.display).toBe('block');
    toggleVisibility(element);
    expect(element.style.display).toBe('none');
  });

  it('should show a hidden element', () => {
    element.style.display = 'none';
    expect(element.style.display).toBe('none');
    toggleVisibility(element);
    expect(element.style.display).toBe('block'); // Restores to original 'block'
  });

  it('should restore original display style when showing', () => {
    element.style.display = 'flex';
    toggleVisibility(element); // Hide
    expect(element.style.display).toBe('none');
    toggleVisibility(element); // Show
    expect(element.style.display).toBe('flex'); // Should restore 'flex'
  });

  it('should handle elements with no initial display style (default to empty string)', () => {
    document.body.innerHTML = '<span id="test-span">Span Text</span>';
    const spanElement = document.getElementById('test-span');
    expect(spanElement.style.display).toBe(''); // Default is empty string

    toggleVisibility(spanElement); // Hide
    expect(spanElement.style.display).toBe('none');
    toggleVisibility(spanElement); // Show
    expect(spanElement.style.display).toBe(''); // Should restore to empty string
  });

  it('should log a warning for invalid element input', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    toggleVisibility(null);
    expect(consoleWarnSpy).toHaveBeenCalledWith('toggleVisibility: Invalid element provided.', null);
    consoleWarnSpy.mockRestore();
  });
});
