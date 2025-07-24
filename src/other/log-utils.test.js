import { setLoggingEnabled, logInfo, logWarning, logError, logDebug, logTable, logTime, logTimeEnd } from './log-utils.js';

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

  describe('logTable', () => {
    const mockTable = jest.spyOn(console, 'table').mockImplementation(() => {});

    afterEach(() => {
      mockTable.mockClear();
    });

    test('should log tabular data', () => {
      const data = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
      logTable(data);
      expect(mockTable).toHaveBeenCalledWith(data, undefined);
    });

    test('should log tabular data with specified properties', () => {
      const data = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
      const properties = ['a'];
      logTable(data, properties);
      expect(mockTable).toHaveBeenCalledWith(data, properties);
    });

    test('should not log when disabled', () => {
      setLoggingEnabled(false);
      logTable([]);
      expect(mockTable).not.toHaveBeenCalled();
    });
  });

  describe('logTime and logTimeEnd', () => {
    const mockTime = jest.spyOn(console, 'time').mockImplementation(() => {});
    const mockTimeEnd = jest.spyOn(console, 'timeEnd').mockImplementation(() => {});

    afterEach(() => {
      mockTime.mockClear();
      mockTimeEnd.mockClear();
    });

    test('should start and end a timer', () => {
      const label = 'myTimer';
      logTime(label);
      expect(mockTime).toHaveBeenCalledWith(label);
      logTimeEnd(label);
      expect(mockTimeEnd).toHaveBeenCalledWith(label);
    });

    test('should not log when disabled', () => {
      setLoggingEnabled(false);
      logTime('disabledTimer');
      logTimeEnd('disabledTimer');
      expect(mockTime).not.toHaveBeenCalled();
      expect(mockTimeEnd).not.toHaveBeenCalled();
    });
  });
});
