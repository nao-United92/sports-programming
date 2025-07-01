const fruits = ['cherry', 'banana', 'orange'];
fruits.push('apple');
console.log(fruits); // ['cherry', 'banana', 'orange', 'apple']
fruits.unshift('grape');
console.log(fruits); // ['grape', 'cherry', 'banana', 'orange', 'apple']
fruits.shift();
console.log(fruits); // ['cherry', 'banana', 'orange', 'apple']
fruits.pop();
console.log(fruits); // ['cherry', 'banana', 'orange']
fruits.splice(0, 2);
console.log(fruits); // ['orange']
const newFruits = fruits.concat(['kiwi', 'melon']);
console.log(newFruits); // ['orange', 'kiwi', 'melon']
const slice = fruits.slice(0);
console.log(slice); // ['orange']

// shallow copy
const ori = ['1'];
const copied = ori;
copied[0] = '2';
console.log(ori); // ['2']
// deep copy
const original = ['1'];
const deepCopied = original.concat();
deepCopied[0] = '3';
console.log(original); // ['1']

// fill
const fill = new Array(100).fill(0);
console.log(fill); // [0, 0, 0, ..., 0]
// flat
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
// reverse
const reversed = flatArray.reverse();
console.log(reversed); // [6, 5, 4, 3, 2, 1]

// practice
let chuka = ['八宝菜', '餃子', '青椒肉絲'];
chuka.push('天津飯');
console.log(chuka); // ['八宝菜', '餃子', '青椒肉絲', '天津飯']
chuka.unshift('チャーハン');
console.log(chuka); // ['チャーハン', '八宝菜', '餃子', '青椒肉絲', '天津飯']
chuka.shift();
console.log(chuka); // ['八宝菜', '餃子', '青椒肉絲', '天津飯']
chuka.pop();
console.log(chuka); // ['八宝菜', '餃子', '青椒肉絲']
chuka.splice(2, 1);
console.log(chuka); // ['八宝菜', '餃子']
console.log(chuka.indexOf('餃子')); // 1
chuka.concat(['杏仁豆腐', 'ごま豆腐']);
console.log(chuka); // ['八宝菜', '餃子', '杏仁豆腐', 'ごま豆腐']
const newArr = chuka.slice(1, 4);
console.log(newArr); // ['餃子', '杏仁豆腐', 'ごま豆腐']
console.log(newArr.reverse()); // ['ごま豆腐', '杏仁豆腐', '餃子']
console.log(newArr.includes('八宝菜')); // false

// map
const arrMap = [1, 2, 3, 5, 6];
function multiply5(value) {
  return value * 5;
}
const newMap = arrMap.map((value) => value * 5);
console.log(newMap);
// filter
function gt3(value) {
  return value > 3;
}
const newFilter = arrMap.filter(gt3);
console.log(newFilter);
// every
const arrEvery = arrMap.every((value) => value > 0);
console.log(arrEvery);
// some
const arrSome = arrMap((value) => value > 2);
console.log(arrSome);
// find
const arrFind = arrMap((value) => value > 2);
console.log(arrFind);
// sort
const arrSort = arrMap.sort();
console.log(arrSort);
