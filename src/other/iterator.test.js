/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const iteratorCode = fs.readFileSync(path.resolve(__dirname, './iterator.js'), 'utf8');

describe('Iterator Examples', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    // evalでコードを実行し、グローバルスコープに関数を定義させる
    eval(iteratorCode);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    jest.spyOn(console, 'error').mockRestore();
  });

  // genIterator のテスト
  test('genIterator should generate numbers from min to max-1', () => {
    const iterator = genIterator(1, 4);
    expect(iterator.next()).toEqual({ value: 1, done: false });
    expect(iterator.next()).toEqual({ value: 2, done: false });
    expect(iterator.next()).toEqual({ value: 3, done: false });
    expect(iterator.next()).toEqual({ done: true });
  });

  // genStep のテスト
  test('genStep should generate numbers with a given step', () => {
    const it = genStep(3, 10, 2);
    expect(it.next().value).toBe(3);
    expect(it.next().value).toBe(5);
    expect(it.next().value).toBe(7);
    expect(it.next().value).toBe(9);
    expect(it.next().done).toBe(true);
    // 既存のコードのconsole.logを検証
    expect(consoleSpy).toHaveBeenCalledWith(3);
    expect(consoleSpy).toHaveBeenCalledWith(5);
    expect(consoleSpy).toHaveBeenCalledWith(7);
    expect(consoleSpy).toHaveBeenCalledWith(9);
  });

  // 組み込みイテレータの利用例のテスト
  test('for...of should iterate over arrays and strings', () => {
    const myArray = ['a', 'b', 'c'];
    const myString = 'hello';

    // for...of with Array
    expect(consoleSpy).toHaveBeenCalledWith('a');
    expect(consoleSpy).toHaveBeenCalledWith('b');
    expect(consoleSpy).toHaveBeenCalledWith('c');

    // for...of with String
    expect(consoleSpy).toHaveBeenCalledWith('h');
    expect(consoleSpy).toHaveBeenCalledWith('e');
    expect(consoleSpy).toHaveBeenCalledWith('l');
    expect(consoleSpy).toHaveBeenCalledWith('l');
    expect(consoleSpy).toHaveBeenCalledWith('o');
  });

  // オブジェクトのカスタムイテレータのテスト
  test('custom iterator for object should iterate over its data', () => {
    // eval時に実行されるため、consoleSpyの呼び出しを検証
    expect(consoleSpy).toHaveBeenCalledWith(10);
    expect(consoleSpy).toHaveBeenCalledWith(20);
    expect(consoleSpy).toHaveBeenCalledWith(30);
  });

  // ジェネレータの委譲 (yield*) のテスト
  test('generator delegation should yield values from delegated generator', () => {
    const results = [];
    for (const value of generatorB()) { // evalで定義されたgeneratorBを使用
      results.push(value);
    }
    expect(results).toEqual([3, 1, 2, 4]);
  });

  // ジェネレータに値を渡す (next() の引数) のテスト
  test('inputProcessor should receive values via next() arguments', () => {
    const processor = inputProcessor(); // evalで定義されたinputProcessorを使用
    expect(processor.next()).toEqual({ value: '最初の入力をしてください:', done: false });
    expect(processor.next('Hello')).toEqual({ value: '次の入力をしてください:', done: false });
    expect(consoleSpy).toHaveBeenCalledWith('受け取った入力1:', 'Hello');
    expect(processor.next('World')).toEqual({ value: '処理完了', done: true });
    expect(consoleSpy).toHaveBeenCalledWith('受け取った入力2:', 'World');
  });

  // ジェネレータでエラーをスローする (throw() メソッド) のテスト
  test('errorGenerator should catch errors and execute finally block', () => {
    const errGen = errorGenerator(); // evalで定義されたerrorGeneratorを使用
    expect(errGen.next()).toEqual({ value: 1, done: false });
    expect(errGen.throw(new Error('意図的なエラー'))).toEqual({ value: undefined, done: true });
    expect(console.error).toHaveBeenCalledWith('ジェネレータ内でエラーをキャッチ:', '意図的なエラー');
    expect(consoleSpy).toHaveBeenCalledWith('ジェネレータのfinallyブロックが実行されました。');
    expect(errGen.next()).toEqual({ value: undefined, done: true }); // 既に終了している
  });
});