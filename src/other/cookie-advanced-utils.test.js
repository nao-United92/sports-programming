import { setCookie } from './cookie-advanced-utils';

describe('setCookie (Advanced)', () => {
  // document.cookie をモックするためのヘルパー関数
  let cookieString = '';

  beforeEach(() => {
    cookieString = ''; // 各テストの前にリセット
    Object.defineProperty(document, 'cookie', {
      get: jest.fn(() => cookieString),
      set: jest.fn((value) => {
        cookieString = value;
      }),
      configurable: true, // 再定義可能にする
    });
  });

  afterEach(() => {
    // document.cookie のモックを解除
    Object.defineProperty(document, 'cookie', {
      value: '', // 元の空文字列に戻す
      writable: true,
      configurable: true,
    });
  });

  test('should set a basic cookie with name and value', () => {
    setCookie('testName', 'testValue');
    expect(document.cookie).toBe('testName=testValue; path=/');
  });

  test('should set a cookie with expires option', () => {
    const now = new Date();
    jest.spyOn(global, 'Date').mockImplementation(() => now);

    setCookie('testName', 'testValue', { expires: 1 });
    const expectedExpires = new Date(now.getTime() + (1 * 24 * 60 * 60 * 1000)).toUTCString();
    expect(document.cookie).toBe(`testName=testValue; expires=${expectedExpires}; path=/`);

    global.Date.mockRestore();
  });

  test('should set a cookie with path option', () => {
    setCookie('testName', 'testValue', { path: '/custom/path' });
    expect(document.cookie).toBe('testName=testValue; path=/custom/path');
  });

  test('should set a cookie with domain option', () => {
    setCookie('testName', 'testValue', { domain: 'example.com' });
    expect(document.cookie).toBe('testName=testValue; path=/; domain=example.com');
  });

  test('should set a cookie with secure option', () => {
    setCookie('testName', 'testValue', { secure: true });
    expect(document.cookie).toBe('testName=testValue; path=/; secure');
  });

  test('should set a cookie with SameSite option', () => {
    setCookie('testName', 'testValue', { sameSite: 'Lax' });
    expect(document.cookie).toBe('testName=testValue; path=/; SameSite=Lax');
  });

  test('should set a cookie with multiple options', () => {
    const now = new Date();
    jest.spyOn(global, 'Date').mockImplementation(() => now);

    setCookie('testName', 'testValue', {
      expires: 7,
      path: '/app',
      domain: 'sub.example.com',
      secure: true,
      sameSite: 'Strict',
    });

    const expectedExpires = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)).toUTCString();
    expect(document.cookie).toBe(`testName=testValue; expires=${expectedExpires}; path=/app; domain=sub.example.com; secure; SameSite=Strict`);

    global.Date.mockRestore();
  });

  test('should handle empty value', () => {
    setCookie('testName', '');
    expect(document.cookie).toBe('testName=; path=/');
  });
});
