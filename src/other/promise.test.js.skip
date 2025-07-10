/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const promiseCode = fs.readFileSync(path.resolve(__dirname, './promise.js'), 'utf8');

describe('Promise Examples', () => {
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    jest.useFakeTimers(); // タイマーをモック化
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    // evalでコードを実行し、グローバルスコープに関数を定義させる
    eval(promiseCode);
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // 残っているタイマーを全て実行
    jest.useRealTimers(); // タイマーを元に戻す
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  // 基本的なPromiseのテスト (instance)
  test('basic promise should resolve or reject and call finally', async () => {
    // 最初のinstanceのPromiseはeval時に実行される
    jest.advanceTimersByTime(1000); // 1秒進める
    await Promise.resolve(); // Promiseが解決するのを待つ

    // 成功または失敗のログが呼ばれることを確認
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('5以上の値'));
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('5未満の値'));
    // finallyが呼ばれることを確認
    expect(consoleErrorSpy).toHaveBeenCalledWith('処理を終了します。');
  });

  // promiseFactory のテスト
  test('promiseFactory should log count and resolve with incremented count', async () => {
    // promiseFactory(0) のチェーンはeval時に実行される
    jest.advanceTimersByTime(1000);
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith(0);
    expect(consoleErrorSpy).toHaveBeenCalledWith('2は偶数のため、成功とします。');
    expect(consoleErrorSpy).toHaveBeenCalledWith('処理を終了します。');
  });

  // promise status のテスト
  test('promise status should change from pending to fulfilled', () => {
    // eval時にpromが定義され、promResolveが呼ばれる
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.objectContaining({
      _state: 'pending' // JestのJSDOM環境でのPromise内部状態表現
    }));
    // promResolve('引数')が呼ばれた後
    expect(consoleLogSpy).toHaveBeenCalledWith(expect.objectContaining({
      _state: 'fulfilled',
      _result: '引数'
    }));
  });

  // Promise.all のテスト
  test('Promise.all should wait for all promises to complete', async () => {
    // wait関数とPromise.allはeval時に実行される
    jest.advanceTimersByTime(600); // wait600が完了するまで進める
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('処理が完了しました。'); // wait500とwait600の両方で呼ばれる
    expect(consoleLogSpy).toHaveBeenCalledWith('すべてのPromiseが完了しました。');
    expect(consoleLogSpy).toHaveBeenCalledWith(500, 600);
  });

  // Promise.resolve のテスト
  test('Promise.resolve should execute then block after global context', async () => {
    // eval時にPromise.resolveが実行される
    expect(consoleLogSpy).toHaveBeenCalledWith('グローバルコンテキスト終了');
    jest.runAllTimers(); // 全てのタイマーを実行
    await Promise.resolve(); // Promiseキューが空になるのを待つ
    expect(consoleLogSpy).toHaveBeenCalledWith(1); // valが1になった後にログされる
  });

  // Promise.reject のテスト
  test('Promise.reject should execute catch block', async () => {
    // eval時にPromise.rejectが実行される
    expect(consoleLogSpy).toHaveBeenCalledWith('グローバルコンテキスト終了');
    jest.runAllTimers();
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith(undefined); // catchブロックでerrorがログされる
  });

  // Job Queue and Task Queue のテスト
  test('Job Queue and Task Queue execution order', async () => {
    // eval時にsetTimeoutとPromise.resolveが実行される
    // ログの順序を検証
    expect(consoleLogSpy).toHaveBeenCalledWith('グローバルコンテキスト終了');
    // Job Queue (Promise.then) が Task Queue (setTimeout) より先に実行される
    jest.runAllTimers(); // 全てのタイマーを実行
    await Promise.resolve(); // Promiseキューが空になるのを待つ
    expect(consoleLogSpy.mock.calls.flat()).toEqual(expect.arrayContaining([
      'グローバルコンテキスト終了',
      'Job1の実行',
      'Job2の実行',
      'Taskの実行'
    ]));
  });

  // Promise.any のテスト
  test('Promise.any should resolve with the first fulfilled promise', async () => {
    // eval時にPromise.anyが実行される
    jest.advanceTimersByTime(1000); // Bが完了するまで進める
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('Promise.any: B が 1000ms で成功');
    expect(consoleLogSpy).toHaveBeenCalledWith('Promise.any 結果 (成功):', 'B');
  });

  test('Promise.any should reject with AggregateError if all promises reject', async () => {
    // eval時にPromise.any (全て失敗するパターン) が実行される
    jest.advanceTimersByTime(2000); // Yが完了するまで進める
    await Promise.resolve();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Promise.any 結果 (全て失敗):', ['Failed: X', 'Failed: Y']);
  });

  // Promise.allSettled のテスト
  test('Promise.allSettled should wait for all promises to settle', async () => {
    // eval時にPromise.allSettledが実行される
    jest.advanceTimersByTime(1500); // P3が完了するまで進める
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('Promise.allSettled 結果:');
    expect(consoleLogSpy).toHaveBeenCalledWith('  Promise 1 成功:', 'P1');
    expect(consoleErrorSpy).toHaveBeenCalledWith('  Promise 2 失敗:', 'Failed: P2');
    expect(consoleLogSpy).toHaveBeenCalledWith('  Promise 3 成功:', 'P3');
  });

  // Promisify のテスト
  test('promisifiedFunction should resolve on success', async () => {
    // eval時にpromisifiedFunction('成功データ')が実行される
    jest.advanceTimersByTime(800);
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('Promisified Function (成功):', '処理されたデータ: 成功データ');
  });

  test('promisifiedFunction should reject on error', async () => {
    // eval時にpromisifiedFunction('error')が実行される
    jest.advanceTimersByTime(800);
    await Promise.resolve();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Promisified Function (エラー):', 'コールバック関数でエラーが発生しました。');
  });

  // Promise.race のより詳細な例（拒否を含む）のテスト
  test('Promise.race should resolve with the first settled promise (success or reject)', async () => {
    // 成功が先に解決するパターン
    // eval時に実行される
    jest.advanceTimersByTime(200); // Fast Failが先に完了
    await Promise.resolve();
    expect(consoleErrorSpy).toHaveBeenCalledWith('Promise.race 結果 (失敗):', 'Race Failed: Fast Fail');

    // 失敗が先に解決するパターン
    // eval時に実行される
    jest.advanceTimersByTime(800); // Fast Fail (200ms) は既に処理済み。Slow Success (1000ms) が残っている
    await Promise.resolve();
    // 既にFast Failがログされているので、ここでは追加のログは期待しない
    // ただし、Promise.raceの内部的な解決は行われている
  });

  // Promiseチェーンでの値の変換と伝播のテスト
  test('Promise chain should transform and propagate values', async () => {
    // eval時に実行される
    jest.advanceTimersByTime(300); // Step 1
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('Step 1: 5 を受け取りました');

    jest.advanceTimersByTime(200); // Step 2
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('Step 2: 10 を受け取りました');

    jest.advanceTimersByTime(100); // Step 3
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('Step 3: 20 を受け取りました');
    expect(consoleLogSpy).toHaveBeenCalledWith('Promiseチェーン完了:', '最終結果: 30');
  });

  // async/await を使った Promise の簡潔な利用例のテスト
  test('fetchUserData should fetch and log user data', async () => {
    // eval時にfetchUserData(123)が実行される
    jest.advanceTimersByTime(700);
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('ユーザーデータ取得中: 123...');
    expect(consoleLogSpy).toHaveBeenCalledWith('ユーザーデータ取得成功:', { id: 123, name: 'ユーザー123', email: 'user123@example.com' });

    // fetchUserData(456)もeval時に実行される
    jest.advanceTimersByTime(700); // 1400ms経過
    await Promise.resolve();
    expect(consoleLogSpy).toHaveBeenCalledWith('ユーザーデータ取得中: 456...');
    expect(consoleLogSpy).toHaveBeenCalledWith('ユーザーデータ取得成功:', { id: 456, name: 'ユーザー456', email: 'user456@example.com' });
  });
});