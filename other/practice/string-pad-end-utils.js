const padEnd = (str, length, char = ' ') => {
  return str + char.repeat(Math.max(0, length - str.length));
};

export default padEnd;
