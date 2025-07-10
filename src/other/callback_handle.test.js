/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
// テスト対象のコードを読み込む
const callbackHandleCode = fs.readFileSync(path.resolve(__dirname, './callback_handle.js'), 'utf8');

describe('Callback Handle Examples', () => {
  let consoleLogSpy;
  let consoleErrorSpy;
  let alertSpy;

  beforeEach(() => {
    jest.useFakeTimers(); // タイマーをモック化
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // DOM環境をリセット
    document.body.innerHTML = '';
    // evalでコードを実行し、グローバルスコープに関数を定義させる
    // ただし、timer(operations)やdelayの即時実行部分はコメントアウトするか、
    // テスト内で個別に呼び出すように調整が必要
    // 今回は、テスト対象のコードをevalで実行し、その中で定義された関数をテストする
    eval(callbackHandleCode);
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // 残っているタイマーを全て実行
    jest.useRealTimers(); // タイマーを元に戻す
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
    alertSpy.mockRestore();
  });

  // timer/operations のテスト (即時実行部分)
  test('timer should call operations after 1 second', () => {
    // callback_handle.js の eval 時に timer(operations) が実行されるため、
    // その結果を検証する
    jest.advanceTimersByTime(1000);
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.any(Number)); // 0-10の数値がログされる
  });

  // delay 関数のテスト
  test('delay should call console.log after 1 second', () => {
    // delay(console.log, 'こんにちは', 1000) の部分
    jest.advanceTimersByTime(1000);
    expect(consoleLogSpy).toHaveBeenCalledWith('こんにちは');
  });

  test('delay should call alert after 2 seconds', () => {
    // delay(alert, 'さようなら', 2000) の部分
    jest.advanceTimersByTime(2000);
    expect(alertSpy).toHaveBeenCalledWith('さようなら');
  });

  test('nested delay should log messages sequentially', () => {
    // ネストされた delay の部分
    jest.advanceTimersByTime(1000);
    expect(consoleLogSpy).toHaveBeenCalledWith('1秒経ちました。');
    jest.advanceTimersByTime(1000); // さらに1秒
    expect(consoleLogSpy).toHaveBeenCalledWith('さらに1秒経ちました。');
  });

  // エラーファーストコールバックのテスト
  test('performAsyncOperation should call callback with data on success', async () => {
    const mockCallback = jest.fn();
    performAsyncOperation(false, mockCallback);
    jest.advanceTimersByTime(1000);
    await Promise.resolve(); // Promiseが解決するのを待つ
    expect(mockCallback).toHaveBeenCalledWith(null, '非同期処理が成功しました！');
    expect(consoleLogSpy).toHaveBeenCalledWith('成功:', '非同期処理が成功しました！');
  });

  test('performAsyncOperation should call callback with error on failure', async () => {
    const mockCallback = jest.fn();
    performAsyncOperation(true, mockCallback);
    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    expect(mockCallback).toHaveBeenCalledWith(expect.any(Error), null);
    expect(consoleErrorSpy).toHaveBeenCalledWith('エラー:', '非同期処理が失敗しました。');
  });

  // イベントリスナーとしてのコールバックのテスト
  test('event button click should log messages', () => {
    // DOMContentLoaded イベントをシミュレートしてボタンを作成させる
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const eventButton = document.querySelector('button');
    expect(eventButton).not.toBeNull();
    expect(eventButton.textContent).toBe('イベントボタン');

    // ボタンクリックをシミュレート
    eventButton.click();

    expect(consoleLogSpy).toHaveBeenCalledWith('イベントボタンがクリックされました！');
    expect(consoleLogSpy).toHaveBeenCalledWith('イベントターゲット:', 'イベントボタン');
  });

  // 配列メソッドでのコールバックのテスト
  test('forEach should log each number and index', () => {
    // eval時に実行されるため、consoleLogSpyの呼び出しを検証
    expect(consoleLogSpy).toHaveBeenCalledWith('forEach: Index 0, Value: 1');
    expect(consoleLogSpy).toHaveBeenCalledWith('forEach: Index 4, Value: 5');
  });

  test('map should double each number', () => {
    // eval時に実行されるため、consoleLogSpyの呼び出しを検証
    expect(consoleLogSpy).toHaveBeenCalledWith('map (doubled):', [2, 4, 6, 8, 10]);
  });

  test('filter should return even numbers', () => {
    // eval時に実行されるため、consoleLogSpyの呼び出しを検証
    expect(consoleLogSpy).toHaveBeenCalledWith('filter (even):', [2, 4]);
  });

  test('reduce should return the sum of numbers', () => {
    // eval時に実行されるため、consoleLogSpyの呼び出しを検証
    expect(consoleLogSpy).toHaveBeenCalledWith('reduce (sum):', 15);
  });

  // 高階関数のテスト
  test('createLogger should return a function that logs with a prefix', () => {
    // eval時に実行されるため、consoleLogSpyの呼び出しを検証
    expect(consoleLogSpy).toHaveBeenCalledWith('[APP] アプリケーションが起動しました。');
    expect(consoleLogSpy).toHaveBeenCalledWith('[ERROR] 致命的なエラーが発生しました！');
  });

  // カスタムイベントエミッターのテスト
  test('EventEmitter should register and emit events', () => {
    const myEmitter = new EventEmitter(); // evalで定義されたクラスを使用
    const mockGreetListener = jest.fn();
    const mockFarewellListener = jest.fn();
    const mockAdditionalGreetListener = jest.fn();

    myEmitter.on('greet', mockGreetListener);
    myEmitter.on('farewell', mockFarewellListener);
    myEmitter.on('greet', mockAdditionalGreetListener);

    myEmitter.emit('greet', 'テスト太郎');
    expect(mockGreetListener).toHaveBeenCalledWith('テスト太郎');
    expect(mockAdditionalGreetListener).toHaveBeenCalledWith('テスト太郎');
    expect(consoleLogSpy).toHaveBeenCalledWith("イベント 'greet' を発火します。");

    myEmitter.emit('farewell', 'テスト花子');
    expect(mockFarewellListener).toHaveBeenCalledWith('テスト花子');
    expect(consoleLogSpy).toHaveBeenCalledWith("イベント 'farewell' を発火します。");

    myEmitter.emit('unknownEvent');
    expect(consoleLogSpy).toHaveBeenCalledWith("イベント 'unknownEvent' のリスナーはありません。");
  });

  test('EventEmitter should remove listeners', () => {
    const myEmitter = new EventEmitter();
    const mockGreetListener = jest.fn();
    const mockAdditionalGreetListener = jest.fn();

    myEmitter.on('greet', mockGreetListener);
    myEmitter.on('greet', mockAdditionalGreetListener);

    myEmitter.off('greet', mockGreetListener);
    myEmitter.emit('greet', 'テスト次郎');

    expect(mockGreetListener).not.toHaveBeenCalled(); // 削除されたリスナーは呼ばれない
    expect(mockAdditionalGreetListener).toHaveBeenCalledWith('テスト次郎'); // 残ったリスナーは呼ばれる
  });
});