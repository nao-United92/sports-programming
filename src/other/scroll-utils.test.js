import { scrollToTop, scrollToElement } from './scroll-utils.js';

describe('Scroll Utilities', () => {
  // Mock window.scrollTo and Element.prototype.scrollIntoView
  const originalScrollTo = window.scrollTo;
  const originalScrollIntoView = Element.prototype.scrollIntoView;

  beforeAll(() => {
    window.scrollTo = jest.fn();
    Element.prototype.scrollIntoView = jest.fn();
  });

  afterAll(() => {
    window.scrollTo = originalScrollTo;
    Element.prototype.scrollIntoView = originalScrollIntoView;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('scrollToTop', () => {
    it('should call window.scrollTo with top: 0 and left: 0', () => {
      scrollToTop();
      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
    });

    it('should pass options to window.scrollTo', () => {
      const options = { behavior: 'smooth' };
      scrollToTop(options);
      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' });
    });

    it('should not throw error if window is undefined', () => {
      const originalWindow = global.window;
      delete global.window;
      expect(() => scrollToTop()).not.toThrow();
      global.window = originalWindow;
    });
  });

  describe('scrollToElement', () => {
    let mockElement;

    beforeEach(() => {
      mockElement = document.createElement('div');
      document.body.appendChild(mockElement);
    });

    afterEach(() => {
      document.body.removeChild(mockElement);
    });

    it('should call scrollIntoView on the given element', () => {
      scrollToElement(mockElement);
      expect(mockElement.scrollIntoView).toHaveBeenCalledTimes(1);
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({});
    });

    it('should pass options to scrollIntoView', () => {
      const options = { behavior: 'smooth', block: 'center' };
      scrollToElement(mockElement, options);
      expect(mockElement.scrollIntoView).toHaveBeenCalledWith(options);
    });

    it('should not throw error if element is null/undefined', () => {
      expect(() => scrollToElement(null)).not.toThrow();
      expect(() => scrollToElement(undefined)).not.toThrow();
      expect(mockElement.scrollIntoView).not.toHaveBeenCalled();
    });

    it('should not throw error if window is undefined', () => {
      const originalWindow = global.window;
      delete global.window;
      expect(() => scrollToElement(mockElement)).not.toThrow();
      expect(mockElement.scrollIntoView).not.toHaveBeenCalled();
      global.window = originalWindow;
    });
  });
});
