function findCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }

  const firstStr = strs[0];
  let prefix = '';

  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }

  return prefix;
}

// Sample Code
// function longestCommonPrefix(strs: string[]): string {
//   var longestPrefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     if (longestPrefix === strs[i]) {
//       continue;
//     }

//     for (let j = 0; j < longestPrefix.length; j++) {
//       if (strs[i][j] !== longestPrefix[j]) {
//         longestPrefix = strs[i].slice(0, j);
//         break;
//       }
//     }
//   }
//   return longestPrefix;
// }
