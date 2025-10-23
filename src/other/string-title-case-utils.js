export const toTitleCase = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};