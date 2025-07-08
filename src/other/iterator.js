function genIterator(min, max) {
  let value = min;

  return {
    next() {
      if (value < max) {
        return {
          done: false,
          value: min++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const iterator = genIterator(1, 10);
console.log(iterator.next().value);

function* genStep(min, max, step) {
  for (let currentValue = min; currentValue <= max; currentValue += step) {
    yield currentValue;
  }
}
const it = genStep(3, 10, 2);
let a = it.next();

while (!a.done) {
  console.log(a.value);
  a = it.next();
}

console.log('\n--- 組み込みイテレータの利用例 ---');

// 配列のイテレータ
const myArray = ['a', 'b', 'c'];
const arrayIterator = myArray[Symbol.iterator]();
console.log('Array Iterator:', arrayIterator.next()); // { value: 'a', done: false }
console.log('Array Iterator:', arrayIterator.next()); // { value: 'b', done: false }

// 文字列のイテレータ
const myString = 'hello';
const stringIterator = myString[Symbol.iterator]();
console.log('String Iterator:', stringIterator.next()); // { value: 'h', done: false }

// for...of ループはイテレータを利用する
console.log('for...of with Array:');
for (const item of myArray) {
  console.log(item);
}

console.log('for...of with String:');
for (const char of myString) {
  console.log(char);
}


console.log('\n--- オブジェクトのカスタムイテレータの例 ---');

const myCollection = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log('Custom Iterator for Object:');
for (const value of myCollection) {
  console.log(value);
}


console.log('\n--- ジェネレータのより高度な利用例 ---');

// yield* を使ったジェネレータの委譲
function* generatorA() {
  yield 1;
  yield 2;
}

function* generatorB() {
  yield 3;
  yield* generatorA(); // generatorAのイテレーションを委譲
  yield 4;
}

console.log('Generator Delegation (yield*):');
for (const value of generatorB()) {
  console.log(value);
}

// ジェネレータに値を渡す (next() の引数)
function* inputProcessor() {
  const input1 = yield '最初の入力をしてください:';
  console.log('受け取った入力1:', input1);
  const input2 = yield '次の入力をしてください:';
  console.log('受け取った入力2:', input2);
  return '処理完了';
}

const processor = inputProcessor();
console.log(processor.next()); // { value: '最初の入力をしてください:', done: false }
console.log(processor.next('Hello')); // { value: '次の入力をしてください:', done: false }
console.log(processor.next('World')); // { value: '処理完了', done: true }


// ジェネレータでエラーをスローする (throw() メソッド)
function* errorGenerator() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.error('ジェネレータ内でエラーをキャッチ:', e.message);
  } finally {
    console.log('ジェネレータのfinallyブロックが実行されました。');
  }
}

const errGen = errorGenerator();
console.log(errGen.next()); // { value: 1, done: false }
console.log(errGen.throw(new Error('意図的なエラー'))); // { value: undefined, done: true }
console.log(errGen.next()); // { value: undefined, done: true } (既に終了している)

