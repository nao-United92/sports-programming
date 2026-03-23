// Reverses a string
export const reverse = (string) => {
  if (typeof string !== 'string') return '';
  return string.split('').reverse().join('');
};
