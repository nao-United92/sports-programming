/**
 * @jest-environment jsdom
 */
import { getOS } from './device-info-utils';

describe('getOS', () => {
  test('Windowsを検出する', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      configurable: true,
    });
    expect(getOS()).toBe('Windows');
  });

  test('Mac OSを検出する', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
      configurable: true,
    });
    expect(getOS()).toBe('Mac OS');
  });

  test('Linuxを検出する', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      configurable: true,
    });
    expect(getOS()).toBe('Linux');
  });

  test('Androidを検出する', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36',
      configurable: true,
    });
    expect(getOS()).toBe('Android');
  });

  test('iOSを検出する', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1',
      configurable: true,
    });
    expect(getOS()).toBe('iOS');
  });

  test('不明なOS', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      configurable: true,
    });
    expect(getOS()).toBe('Unknown');
  });
});
