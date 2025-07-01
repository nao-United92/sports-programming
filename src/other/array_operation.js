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
