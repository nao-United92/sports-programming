function isPalindrome(x: number): boolean {
  // 整数でない場合は回文ではない
  if (!Number.isInteger(x)) {
    return false;
  }

  // 負の数は回文ではない
  if (x < 0) {
    return false;
  }

  // 0は回文である
  if (x === 0) {
    return true;
  }

  let originalNum = x;
  let reversedNum = 0;

  // 数値を反転させる
  let tempNum = x; // 元のxの値を変更しないように一時変数を使用
  while (tempNum > 0) {
    const digit = tempNum % 10; // 末尾の桁を取得
    reversedNum = reversedNum * 10 + digit; // 反転した数値に桁を追加
    tempNum = Math.floor(tempNum / 10); // 末尾の桁を削除
  }

  // 元の数値と反転した数値が等しいか比較
  return originalNum === reversedNum;
}

// テストケース
console.log(`isPalindrome(121): ${isPalindrome(121)}`); // 出力: isPalindrome(121): true
console.log(`isPalindrome(-121): ${isPalindrome(-121)}`); // 出力: isPalindrome(-121): false
console.log(`isPalindrome(10): ${isPalindrome(10)}`); // 出力: isPalindrome(10): false
console.log(`isPalindrome(12321): ${isPalindrome(12321)}`); // 出力: isPalindrome(12321): true
console.log(`isPalindrome(1): ${isPalindrome(1)}`); // 出力: isPalindrome(1): true
console.log(`isPalindrome(12.1): ${isPalindrome(12.1)}`); // 出力: isPalindrome(12.1): false
console.log(`isPalindrome(1221): ${isPalindrome(1221)}`); // 出力: isPalindrome(1221): true
