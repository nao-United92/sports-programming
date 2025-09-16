const { getScrollTop, getScrollLeft, getViewportHeight, getViewportWidth } = require('./viewport-utils.js');

// Mock window and document
global.window = {
  pageYOffset: 100,
  pageXOffset: 50,
  innerHeight: 768,
  innerWidth: 1024,
};

global.document = {
  documentElement: {
    scrollTop: 100,
    scrollLeft: 50,
    clientHeight: 768,
    clientWidth: 1024,
  },
};

describe('Viewport Utilities', () => {
  it('should get the scroll top position', () => {
    expect(getScrollTop()).toBe(100);
  });

  it('should get the scroll left position', () => {
    expect(getScrollLeft()).toBe(50);
  });

  it('should get the viewport height', () => {
    expect(getViewportHeight()).toBe(768);
  });

  it('should get the viewport width', () => {
    expect(getViewportWidth()).toBe(1024);
  });
});