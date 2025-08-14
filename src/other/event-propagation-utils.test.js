import { stopPropagation } from './event-propagation-utils';

describe('stopPropagation', () => {
  test('should call stopPropagation method on the event object', () => {
    const mockEvent = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn(), // Other event methods
    };
    stopPropagation(mockEvent);
    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
  });

  test('should not throw an error if event object or stopPropagation method is missing', () => {
    // Test with null event
    expect(() => stopPropagation(null)).not.toThrow();

    // Test with undefined event
    expect(() => stopPropagation(undefined)).not.toThrow();

    // Test with event object missing stopPropagation method
    const incompleteEvent = {};
    expect(() => stopPropagation(incompleteEvent)).not.toThrow();

    const anotherIncompleteEvent = { stopPropagation: null };
    expect(() => stopPropagation(anotherIncompleteEvent)).not.toThrow();
  });

  test('should not call other methods on the event object', () => {
    const mockEvent = {
      stopPropagation: jest.fn(),
      preventDefault: jest.fn(),
    };
    stopPropagation(mockEvent);
    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
  });

  test('should work with a real DOM event', () => {
    document.body.innerHTML = '<div id="parent"><button id="child"></button></div>';
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');

    const parentClickHandler = jest.fn();
    parent.addEventListener('click', parentClickHandler);

    child.addEventListener('click', (event) => {
      stopPropagation(event);
    });

    child.click(); // Simulate click on child

    expect(parentClickHandler).not.toHaveBeenCalled();
  });
});
