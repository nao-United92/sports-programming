import { addClass, removeClass, hasClass, toggleClass } from './dom-class-utils.js';

describe('DOM Class Utilities', () => {
  let mockElement;

  beforeEach(() => {
    mockElement = {
      classList: {
        add: jest.fn(),
        remove: jest.fn(),
        contains: jest.fn(),
        toggle: jest.fn(),
      },
    };
  });

  describe('addClass', () => {
    it('should add a class to the element', () => {
      addClass(mockElement, 'test-class');
      expect(mockElement.classList.add).toHaveBeenCalledWith('test-class');
    });

    it('should not throw error if element is null', () => {
      expect(() => addClass(null, 'test-class')).not.toThrow();
    });
  });

  describe('removeClass', () => {
    it('should remove a class from the element', () => {
      removeClass(mockElement, 'test-class');
      expect(mockElement.classList.remove).toHaveBeenCalledWith('test-class');
    });

    it('should not throw error if element is null', () => {
      expect(() => removeClass(null, 'test-class')).not.toThrow();
    });
  });

  describe('hasClass', () => {
    it('should return true if element has the class', () => {
      mockElement.classList.contains.mockReturnValue(true);
      expect(hasClass(mockElement, 'test-class')).toBe(true);
      expect(mockElement.classList.contains).toHaveBeenCalledWith('test-class');
    });

    it('should return false if element does not have the class', () => {
      mockElement.classList.contains.mockReturnValue(false);
      expect(hasClass(mockElement, 'test-class')).toBe(false);
    });

    it('should return false if element is null', () => {
      expect(hasClass(null, 'test-class')).toBe(false);
    });
  });

  describe('toggleClass', () => {
    it('should toggle a class on the element', () => {
      toggleClass(mockElement, 'test-class');
      expect(mockElement.classList.toggle).toHaveBeenCalledWith('test-class', undefined);
    });

    it('should force add a class', () => {
      toggleClass(mockElement, 'test-class', true);
      expect(mockElement.classList.toggle).toHaveBeenCalledWith('test-class', true);
    });

    it('should force remove a class', () => {
      toggleClass(mockElement, 'test-class', false);
      expect(mockElement.classList.toggle).toHaveBeenCalledWith('test-class', false);
    });

    it('should not throw error if element is null', () => {
      expect(() => toggleClass(null, 'test-class')).not.toThrow();
    });
  });
});