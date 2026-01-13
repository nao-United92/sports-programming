
export const isSuperset = (arr1, arr2) => {
  const counts1 = {};
  for (const item of arr1) {
    counts1[item] = (counts1[item] || 0) + 1;
  }

  const counts2 = {};
  for (const item of arr2) {
    counts2[item] = (counts2[item] || 0) + 1;
  }

  for (const item in counts2) {
    if (!counts1[item] || counts1[item] < counts2[item]) {
      return false;
    }
  }
  return true;
};
