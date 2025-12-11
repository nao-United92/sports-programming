let idCounter = 0;

const uniqueId = (prefix = '') => {
  idCounter++;
  return prefix + idCounter;
};

module.exports = uniqueId;
