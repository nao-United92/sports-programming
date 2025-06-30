const target = { a: 0, b: 1, c: { d: 2, e: 0, f: 'hello' } };

console.log(JSON.stringify(target));

console.log(JSON.stringify(target, ['a', 'b']));

console.log(JSON.stringify(target, ['e', 'f']));

function replacer(prop, value) {
  if (typeof value === 'number' && value < 1) {
    return;
  }
  return value;
}
console.log(JSON.stringify(target, replacer));

console.log(JSON.stringify(target, null, '\t'));

let data = localStorage.getItem('data');
data = JSON.parse(data);

if (data === null) {
  data = { val: 0 };
}

console.log(data.val);

data.val++;

const json = JSON.stringify(data);
localStorage.setItem('data', json);

const fruits = {
  banana: 'うまい',
  apple: 'りんご',
  orange: 'オレンジ',
  other: { grape: 'うまい' },
};
function replacer(key, value) {
  if (typeof value === 'string' && value !== 'うまい') {
    return;
  }
  return value;
}

console.log(JSON.stringify(fruits, replacer));
