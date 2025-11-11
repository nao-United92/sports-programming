const { debounce, throttle } = require('./function-rate-limiters');

jest.useFakeTimers();

describe('function-rate-limiters', () => {
  describe('debounce', () => {
    let func;
    let debouncedFunc;

    beforeEach(() => {
      func = jest.fn();
      debouncedFunc = debounce(func, 500);
    });

    it('指定時間内に複数回呼び出されても、最後の呼び出しから指定時間後まで実行されない', () => {
      for (let i = 0; i < 5; i++) {
        debouncedFunc();
      }
      expect(func).not.toHaveBeenCalled();
    });

    it('最後の呼び出しから指定時間が経過した後に1度だけ実行される', () => {
      debouncedFunc();
      debouncedFunc();
      
      jest.advanceTimersByTime(500);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('指定時間経過前に再度呼び出されるとタイマーがリセットされる', () => {
      debouncedFunc();
      jest.advanceTimersByTime(300);
      debouncedFunc();
      jest.advanceTimersByTime(400);
      
      expect(func).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('関数に引数を正しく渡す', () => {
      debouncedFunc(1, 'test');
      jest.advanceTimersByTime(500);
      expect(func).toHaveBeenCalledWith(1, 'test');
    });
  });

  describe('throttle', () => {
    let func;
    let throttledFunc;

    beforeEach(() => {
      func = jest.fn();
      throttledFunc = throttle(func, 1000);
    });

    it('最初の呼び出しで即座に実行される', () => {
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('制限時間内に複数回呼び出されても、最初の1回しか実行されない', () => {
      throttledFunc();
      throttledFunc();
      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('制限時間経過後に呼び出すと再度実行される', () => {
      throttledFunc(); // 1回目
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(500);
      throttledFunc(); // 制限時間内なので実行されない
      expect(func).toHaveBeenCalledTimes(1);
      
      jest.advanceTimersByTime(500); // 合計1000ms経過
      throttledFunc(); // 2回目
      expect(func).toHaveBeenCalledTimes(2);
    });

    it('最後の呼び出しが制限時間後に実行されることを保証する', () => {
      throttledFunc(); // 1回目実行
      expect(func).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(200);
      throttledFunc(); // 実行されない

      jest.advanceTimersByTime(1000); // 合計1200ms経過
      // 前回の throttle 時にセットされた setTimeout が実行される
      expect(func).toHaveBeenCalledTimes(2);

      throttledFunc(); // 3回目実行
      expect(func).toHaveBeenCalledTimes(3);
    });

    it('関数に引数を正しく渡す', () => {
      throttledFunc('arg1', 2);
      expect(func).toHaveBeenCalledWith('arg1', 2);

      jest.advanceTimersByTime(1000);
      throttledFunc('arg3', 4);
      expect(func).toHaveBeenCalledWith('arg3', 4);
    });
  });
});