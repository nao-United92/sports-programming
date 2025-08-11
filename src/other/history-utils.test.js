import { back, forward, go } from './history-utils.js';

// Mocking window.history
const historyMock = {
  back: jest.fn(),
  forward: jest.fn(),
  go: jest.fn(),
};

Object.defineProperty(window, 'history', {
  writable: true,
  value: historyMock,
});

describe('History Utils', () => {
  beforeEach(() => {
    // Clear mock history before each test
    historyMock.back.mockClear();
    historyMock.forward.mockClear();
    historyMock.go.mockClear();
  });

  describe('back', () => {
    it('should call window.history.back', () => {
      back();
      expect(historyMock.back).toHaveBeenCalledTimes(1);
    });
  });

  describe('forward', () => {
    it('should call window.history.forward', () => {
      forward();
      expect(historyMock.forward).toHaveBeenCalledTimes(1);
    });
  });

  describe('go', () => {
    it('should call window.history.go with the given delta', () => {
      go(-2);
      expect(historyMock.go).toHaveBeenCalledWith(-2);
      go(1);
      expect(historyMock.go).toHaveBeenCalledWith(1);
    });
  });
});
