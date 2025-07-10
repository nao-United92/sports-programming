/**
 * @jest-environment jsdom
 */

// テスト対象のスクリプトを読み込む
// ただし、直接実行するとrunAsyncOperationsが走ってしまうので、
// テスト内でrequireするようにする
const fs = require('fs');
const path = require('path');
const exampleCode = fs.readFileSync(path.resolve(__dirname, './async_await_example.js'), 'utf8');

describe('Async/Await Example Tests', () => {
  let consoleSpy;

  beforeEach(() => {
    // タイマーをモック化
    jest.useFakeTimers();
    // console.logとconsole.errorをスパイ
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});

    // DOM環境をリセット
    document.body.innerHTML = '';
  });

  afterEach(() => {
    // タイマーを元に戻す
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    // スパイを元に戻す
    consoleSpy.mockRestore();
    jest.spyOn(console, 'error').mockRestore();
  });

  // delay関数のテスト
  test('delay function should resolve after specified time', async () => {
    const promise = eval(exampleCode + '; delay(100);'); // delay関数を評価して呼び出す
    jest.advanceTimersByTime(100); // 100ms進める
    await promise;
    expect(consoleSpy).toHaveBeenCalledWith('--- 100ms 経過しました ---');
    expect(consoleSpy).toHaveBeenCalledWith('処理が100ms後に完了しました。');
  });

  // fetchData関数のテスト (成功)
  test('fetchData function should resolve with data on success', async () => {
    const promise = eval(exampleCode + '; fetchData(true);');
    jest.advanceTimersByTime(1500); // 1.5秒進める
    const result = await promise;
    expect(result).toEqual({ data: 'APIから取得したデータです。', status: 200 });
  });

  // fetchData関数のテスト (失敗)
  test('fetchData function should reject with error on failure', async () => {
    const promise = eval(exampleCode + '; fetchData(false);');
    jest.advanceTimersByTime(1500); // 1.5秒進める
    await expect(promise).rejects.toThrow('APIからのデータ取得に失敗しました。');
  });

  // runAsyncOperations関数のテスト
  test('runAsyncOperations should execute async operations in sequence and handle errors', async () => {
    // evalでコードを評価し、runAsyncOperations関数を定義・実行させる
    eval(exampleCode);

    // 非同期処理の開始ログ
    expect(consoleSpy).toHaveBeenCalledWith('非同期処理を開始します...');

    // delay(2000)の実行と完了
    jest.advanceTimersByTime(2000);
    await Promise.resolve(); // Promiseが解決するのを待つ
    expect(consoleSpy).toHaveBeenCalledWith('--- 2000ms 経過しました ---');
    expect(consoleSpy).toHaveBeenCalledWith('await delay(2000):', '処理が2000ms後に完了しました。');

    // fetchData(true)の実行と完了
    jest.advanceTimersByTime(1500);
    await Promise.resolve();
    expect(consoleSpy).toHaveBeenCalledWith('await fetchData(true):', { data: 'APIから取得したデータです。', status: 200 });

    // fetchData(false)の実行とエラーハンドリング
    jest.advanceTimersByTime(1500);
    await Promise.resolve();
    expect(console.error).toHaveBeenCalledWith('エラーが発生しました:', 'APIからのデータ取得に失敗しました。');

    // Promise.allの実行と完了
    expect(consoleSpy).toHaveBeenCalledWith('\n--- Promise.all を使った並行処理 ---');
    jest.advanceTimersByTime(1500); // delay(1000)とfetchData(true)のうち長い方
    await Promise.resolve();
    expect(consoleSpy).toHaveBeenCalledWith('Promise.all 結果:', {
      resultA: '処理が1000ms後に完了しました。',
      resultB: { data: 'APIから取得したデータです。', status: 200 }
    });

    // Promise.raceの実行と完了
    expect(consoleSpy).toHaveBeenCalledWith('\n--- Promise.race を使った最速処理 ---');
    jest.advanceTimersByTime(1500); // delay(2000)とfetchData(true)のうち速い方
    await Promise.resolve();
    expect(consoleSpy).toHaveBeenCalledWith('Promise.race 結果:', { data: 'APIから取得したデータです。', status: 200 });

    // 非同期処理の終了ログ
    expect(consoleSpy).toHaveBeenCalledWith('非同期処理が終了しました。');
  });

  // DOM操作と組み合わせる例のテスト (ボタンクリック)
  test('button click should trigger async operations', async () => {
    // evalでコードを評価し、DOM要素とイベントリスナーをセットアップさせる
    eval(exampleCode);

    // DOMContentLoadedイベントをシミュレートしてボタンを作成させる
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const asyncButton = document.querySelector('button');
    expect(asyncButton).not.toBeNull();
    expect(asyncButton.textContent).toBe('非同期処理を実行');

    // ボタンクリックをシミュレート
    asyncButton.click();

    expect(consoleSpy).toHaveBeenCalledWith('ボタンがクリックされました。非同期処理を開始します...');

    // delay(1000)の実行と完了
    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    expect(consoleSpy).toHaveBeenCalledWith('ボタンクリック後の処理:', '処理が1000ms後に完了しました。');

    // fetchData(true)の実行と完了
    jest.advanceTimersByTime(1500);
    await Promise.resolve();
    expect(consoleSpy).toHaveBeenCalledWith('ボタンクリック後のデータ取得:', { data: 'APIから取得したデータです。', status: 200 });
  });
});