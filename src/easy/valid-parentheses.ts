// function isValid(s: string): boolean {
//   const length = s.length;
//   const surplus = s.length % 2;
//   if (surplus !== 0) return false;

//   let value = '';
//   const validString: string[] = ['()', '{}', '[]', '()[]{}', '([])'];
//   let result = false;
//   if (surplus === 0) {
//     for (let i = 0; i < length; i++) {
//       value += s[i];
//     }
//     if (validString.includes(value)) result = true;
//   }
//   return result;
// }

// function isValid(s: string): boolean {
//   const surplus = s.length % 2;
//   if (surplus !== 0) return false;

//   let value = '';
//   let leftValue = '';
//   let rightValue = '';
//   const leftBrackets: string[] = ['(', '{', '['];
//   const rightBrackets: string[] = [')', '}', ']'];
//   let result = false;
//   const sLength = s.length;
//   for (let i = 0; i < sLength; i++) {
//     if (leftBrackets.includes(s[i])) {
//       value += s[i];
//       leftValue += s[i];
//     }
//     if (rightBrackets.includes(s[i])) {
//       value += s[i];
//       rightValue += s[i];
//     }
//   }
//   if (value.length % 2 == 0 && (leftValue.length === rightValue.length)) result = true;
//   return result;
// }

// function isValid(s: string): boolean {
//   const surplus = s.length % 2;
//   if (surplus !== 0) return false;

//   let isLeftCorrect = false;
//   let isRightCorrect = false;
//   const leftBrackets: string[] = ['(', '{', '['];
//   const rightBrackets: string[] = [')', '}', ']'];
//   let result = false;
//   const sLength = s.length;
//   for (let i = 0; i < sLength; i++) {
//     isLeftCorrect = leftBrackets.includes(s[i]);
//     isRightCorrect = rightBrackets.includes(s[i]);
//   }
//   if (isLeftCorrect && isRightCorrect) result = true;
//   return result;
// }

// function isValid(s: string): boolean {
//   const surplus = s.length % 2;
//   if (surplus !== 0) return false;

//   let leftValue = '';
//   let rightValue = '';
//   const leftBrackets: string[] = ['(', '{', '['];
//   const rightBrackets: string[] = [')', '}', ']'];
//   const sLength = s.length;
//   let result = false;
//   for (let i = 0; i < sLength; i++) {
//     if (leftBrackets.includes(s[i])) {
//       leftValue += s[i];
//     }
//     if (rightBrackets.includes(s[i])) {
//       rightValue += s[i];
//     }
//   }
//   const mergeValue = [...leftValue, ...rightValue];
//   for (let j = 0; j < sLength; j++) {
//     if (
//       j === sLength - 1 &&
//       leftBrackets.indexOf(leftValue[j]) !==
//         rightBrackets.indexOf(rightValue[j])
//     )
//       return false;
//   }

//   if (leftValue.length === rightValue.length) result = true;
//   return result;
// }

// Sample Code
// function isValid(s: string): boolean {
//   const stack: string[] = [];
//   const mapping: { [key: string]: string } = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   };

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];

//     if (char === '(' || char === '{' || char === '[') {
//       stack.push(char);
//     } else if (char === ')' || char === '}' || char === ']') {
//       if (stack.length === 0 || stack.pop() !== mapping[char]) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

function isValid(s: string): boolean {
  while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
    s = s.replace('()', '');
    s = s.replace('{}', '');
    s = s.replace('[]', '');
  }

  return s === '';
}
