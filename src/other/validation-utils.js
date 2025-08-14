/**
 * メールアドレスが有効な形式であるかを判定します。
 * @param {string} email - 検証するメールアドレス文字列。
 * @returns {boolean} 有効なメールアドレス形式であればtrue、そうでなければfalse。
 */
export function isValidEmail(email) {
  if (typeof email !== 'string' || email.length === 0) {
    return false;
  }
  // シンプルなメールアドレスの正規表現
  const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}