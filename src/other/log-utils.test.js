import { setLoggingEnabled, info, warn, error, debug } from './log-utils.js';

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
    info('test');
    expect(spy.info).toHaveBeenCalledWith('test');
  });

  it('should log warn messages', () => {
    warn('test');
    expect(spy.warn).toHaveBeenCalledWith('test');
  });

  it('should log error messages', () => {
    error('test');
    expect(spy.error).toHaveBeenCalledWith('test');
  });

  it('should log debug messages', () => {
    debug('test');
    expect(spy.debug).toHaveBeenCalledWith('test');
  });

  it('should not log when disabled', () => {
    setLoggingEnabled(false);
    info('test');
    warn('test');
    error('test');
    debug('test');
    expect(spy.info).not.toHaveBeenCalled();
    expect(spy.warn).not.toHaveBeenCalled();
    expect(spy.error).not.toHaveBeenCalled();
    expect(spy.debug).not.toHaveBeenCalled();
  });
});
