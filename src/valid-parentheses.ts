function isValid(s: string): boolean {
  const length = s.length;
  const surplus = s.length % 2;
  if (surplus !== 0) return false;

  let value = '';
  const validString: string[] = ['()', '{}', '[]', '()[]{}', '([])'];
  let result = false;
  if (surplus === 0) {
    for (let i = 0; i < length; i++) {
      value += s[i];
    }
    if (validString.includes(value)) result = true;
  }
  return result;
}
