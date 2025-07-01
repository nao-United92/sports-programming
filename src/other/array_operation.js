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
