const groupConsecutiveBy = (arr, predicate) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const result = [];
  let currentGroup = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (predicate(arr[i - 1], arr[i])) {
      currentGroup.push(arr[i]);
    } else {
      result.push(currentGroup);
      currentGroup = [arr[i]];
    }
  }

  result.push(currentGroup); // Add the last group
  return result;
};

module.exports = groupConsecutiveBy;
