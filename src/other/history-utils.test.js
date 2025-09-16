const { back, forward, go } = require('./history-utils.js');

// Mock history
global.history = {
  back: jest.fn(),
  forward: jest.fn(),
  go: jest.fn(),
};

describe('History Utilities', () => {
  beforeEach(() => {
    history.back.mockClear();
    history.forward.mockClear();
    history.go.mockClear();
  });

  describe('back', () => {
    it('should call history.back', () => {
      back();
      expect(history.back).toHaveBeenCalledTimes(1);
    });
  });

  describe('forward', () => {
    it('should call history.forward', () => {
      forward();
      expect(history.forward).toHaveBeenCalledTimes(1);
    });
  });

  describe('go', () => {
    it('should call history.go with the given delta', () => {
      go(-2);
      expect(history.go).toHaveBeenCalledWith(-2);
    });
  });
});