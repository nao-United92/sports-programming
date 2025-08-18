import { fadeIn, fadeOut } from './animation-fade-utils';

// Mocking Web Animations API
if (!Element.prototype.animate) {
  Element.prototype.animate = jest.fn(() => ({
    onfinish: null,
    cancel: jest.fn(),
    play: jest.fn(),
    pause: jest.fn(),
  }));
}


describe('Animation Fade Utilities', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  describe('fadeIn', () => {
    it('should call animate with the correct keyframes and options', () => {
      fadeIn(element, 300);
      expect(element.animate).toHaveBeenCalledWith(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 300, easing: 'ease-in-out' }
      );
    });

    it('should set display style to empty string', () => {
      element.style.display = 'none';
      fadeIn(element);
      expect(element.style.display).toBe('');
    });
  });

  describe('fadeOut', () => {
    it('should call animate with the correct keyframes and options', () => {
      fadeOut(element, 500);
      expect(element.animate).toHaveBeenCalledWith(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 500, easing: 'ease-in-out' }
      );
    });

    it('should set display to none on finish', () => {
        const animation = fadeOut(element);
        // Manually trigger onfinish for testing
        if (animation && typeof animation.onfinish === 'function') {
            animation.onfinish();
        }
        expect(element.style.display).toBe('none');
    });
  });
});
