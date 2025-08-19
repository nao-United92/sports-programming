const { preventEventDefault, stopEventPropagation, stopEvent } = require('./event-control-utils.js');

describe('Event Control Utilities', () => {
  let mockEvent;

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
  });

  describe('preventEventDefault', () => {
    test('should call preventDefault on the event object', () => {
      preventEventDefault(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    test('should not throw error if event or preventDefault is invalid', () => {
      expect(() => preventEventDefault(null)).not.toThrow();
      expect(() => preventEventDefault({})).not.toThrow();
    });
  });

  describe('stopEventPropagation', () => {
    test('should call stopPropagation on the event object', () => {
      stopEventPropagation(mockEvent);
      expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
    });

    test('should not throw error if event or stopPropagation is invalid', () => {
      expect(() => stopEventPropagation(null)).not.toThrow();
      expect(() => stopEventPropagation({})).not.toThrow();
    });
  });

  describe('stopEvent', () => {
    test('should call preventDefault and stopPropagation on the event object', () => {
      stopEvent(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
      expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
    });

    test('should not throw error if event is invalid', () => {
      expect(() => stopEvent(null)).not.toThrow();
      expect(() => stopEvent({})).not.toThrow();
    });
  });
});