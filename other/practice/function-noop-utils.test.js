import { noop } from './function-noop-utils.js';

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });

  it('should not throw an error when called with arguments', () => {
    expect(() => noop(1, 2, 'test')).not.toThrow();
  });

  it('should not have any side effects', () => {
    const originalConsoleLog = console.log;
    const mockConsoleLog = jest.fn();
    console.log = mockConsoleLog;

    noop();

    expect(mockConsoleLog).not.toHaveBeenCalled();
    console.log = originalConsoleLog; // Restore original console.log
  });
});
