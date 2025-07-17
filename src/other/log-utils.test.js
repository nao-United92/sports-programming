import { setLoggingEnabled, logInfo, logWarning, logError, logDebug } from './log-utils.js';

describe('log-utils', () => {
  const spy = {
    info: jest.spyOn(console, 'info').mockImplementation(() => {}),
    warn: jest.spyOn(console, 'warn').mockImplementation(() => {}),
    error: jest.spyOn(console, 'error').mockImplementation(() => {}),
    debug: jest.spyOn(console, 'debug').mockImplementation(() => {}),
  };

  afterEach(() => {
    setLoggingEnabled(true);
    jest.clearAllMocks();
  });

  it('should log info messages', () => {
    logInfo('test');
    expect(spy.info).toHaveBeenCalledWith('test');
  });

  it('should log warn messages', () => {
    logWarning('test');
    expect(spy.warn).toHaveBeenCalledWith('test');
  });

  it('should log error messages', () => {
    logError('test');
    expect(spy.error).toHaveBeenCalledWith('test');
  });

  it('should log debug messages', () => {
    logDebug('test');
    expect(spy.debug).toHaveBeenCalledWith('test');
  });

  it('should not log when disabled', () => {
    setLoggingEnabled(false);
    logInfo('test');
    logWarning('test');
    logError('test');
    logDebug('test');
    expect(spy.info).not.toHaveBeenCalled();
    expect(spy.warn).not.toHaveBeenCalled();
    expect(spy.error).not.toHaveBeenCalled();
    expect(spy.debug).not.toHaveBeenCalled();
  });
});
