const { scrollToElement } = require('./dom-scroll-utils');

describe('scrollToElement', () => {
  let mockElement;

  beforeEach(() => {
    // Mock the scrollIntoView method for elements
    mockElement = {
      scrollIntoView: jest.fn(),
    };

    // Mock document.querySelector to return our mock element
    jest.spyOn(document, 'querySelector').mockReturnValue(mockElement);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should scroll to an element by selector with default smooth behavior', () => {
    const selector = '#targetElement';
    const result = scrollToElement(selector);

    expect(document.querySelector).toHaveBeenCalledWith(selector);
    expect(mockElement.scrollIntoView).toHaveBeenCalledTimes(1);
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(result).toBe(true);
  });

  it('should scroll to an element by direct element reference', () => {
    const result = scrollToElement(mockElement);

    expect(document.querySelector).not.toHaveBeenCalled(); // Should not use querySelector
    expect(mockElement.scrollIntoView).toHaveBeenCalledTimes(1);
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(result).toBe(true);
  });

  it('should scroll with custom options', () => {
    const selector = '.anotherElement';
    const customOptions = { behavior: 'auto', block: 'center' };
    scrollToElement(selector, customOptions);

    expect(document.querySelector).toHaveBeenCalledWith(selector);
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith(customOptions);
  });

  it('should return false if the element is not found by selector', () => {
    document.querySelector.mockReturnValue(null); // Element not found
    const result = scrollToElement('#nonExistentElement');

    expect(document.querySelector).toHaveBeenCalledWith('#nonExistentElement');
    expect(mockElement.scrollIntoView).not.toHaveBeenCalled();
    expect(result).toBe(false);
  });

  it('should return false if target is not a string or Element', () => {
    expect(scrollToElement(null)).toBe(false);
    expect(scrollToElement(undefined)).toBe(false);
    expect(scrollToElement(123)).toBe(false);
    expect(scrollToElement({})).toBe(false);
    expect(mockElement.scrollIntoView).not.toHaveBeenCalled();
  });
});