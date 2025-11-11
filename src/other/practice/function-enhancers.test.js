const { memoize } = require('./function-enhancers');

describe('function-enhancers', () => {
  describe('memoize', () => {
    it('元の関数と同じ結果を返すこと', () => {
      const add = (a, b) => a + b;
      const memoizedAdd = memoize(add);
      expect(memoizedAdd(2, 3)).toBe(5);
    });

    it('同じ引数での呼び出しでは、元の関数は一度しか実行されないこと', () => {
      const mockFunc = jest.fn(x => x * 2);
      const memoizedFunc = memoize(mockFunc);

      memoizedFunc(5);
      memoizedFunc(5);
      memoizedFunc(5);

      expect(mockFunc).toHaveBeenCalledTimes(1);
      expect(memoizedFunc(5)).toBe(10);
    });

    it('異なる引数での呼び出しでは、元の関数が都度実行されること', () => {
      const mockFunc = jest.fn((a, b) => a + b);
      const memoizedFunc = memoize(mockFunc);

      memoizedFunc(1, 2); // 1回目
      memoizedFunc(3, 4); // 2回目
      memoizedFunc(1, 2); // キャッシュから返す
      memoizedFunc(3, 4); // キャッシュから返す

      expect(mockFunc).toHaveBeenCalledTimes(2);
    });

    it('thisコンテキストを正しく維持すること', () => {
      const testObject = {
        value: 10,
        method: function(num) {
          return this.value + num;
        }
      };
      testObject.memoizedMethod = memoize(testObject.method);

      const result = testObject.memoizedMethod(5);
      expect(result).toBe(15);
      
      // 元のメソッドが呼ばれたことを確認
      const mockMethod = jest.spyOn(testObject, 'method');
      testObject.memoizedMethod(5);
      expect(mockMethod).not.toHaveBeenCalled(); // キャッシュから返されるため呼ばれない
    });

    it('引数がオブジェクトの場合でも正しく動作すること', () => {
        const mockFunc = jest.fn(obj => obj.a + obj.b);
        const memoizedFunc = memoize(mockFunc);

        const arg1 = { a: 1, b: 2 };
        const arg2 = { a: 3, b: 4 };

        memoizedFunc(arg1);
        memoizedFunc(arg2);
        memoizedFunc(arg1);

        expect(mockFunc).toHaveBeenCalledTimes(2);
        expect(memoizedFunc(arg1)).toBe(3);
        expect(memoizedFunc(arg2)).toBe(7);
    });
  });
});
