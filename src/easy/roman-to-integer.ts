function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentValue = romanMap[s[i]];
    const nextValue = romanMap[s[i + 1]];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }
  return result;
}

// Sample Code
// function romanToInt(s: string): number {


//     enum RomanValueEnum {
//         "I" = 1,
//         "V" = 5,
//         "X" = 10,
//         "L" = 50,
//         "C" = 100,
//         "D" = 500,
//         "M" = 1000
//     }

//     let intergerNumber = 0
//     for (let i = 0; i < s.length; i++) {
//         if (RomanValueEnum[s[i]] < RomanValueEnum[s[i + 1]]) {
//             intergerNumber -= RomanValueEnum[s[i]]
//         }
//         else {
//             intergerNumber += RomanValueEnum[s[i]];
//         }
//     }


//     return intergerNumber

// };
