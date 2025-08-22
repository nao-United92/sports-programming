export const truncate = (str, length, omission = '...') => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - omission.length) + omission;
};
