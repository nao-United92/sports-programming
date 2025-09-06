
export const groupWith = (fn, list) => {
  if (!Array.isArray(list) || list.length === 0) {
    return [];
  }

  const result = [];
  let group = [list[0]];

  for (let i = 1; i < list.length; i++) {
    if (fn(group[group.length - 1], list[i])) {
      group.push(list[i]);
    } else {
      result.push(group);
      group = [list[i]];
    }
  }

  result.push(group);
  return result;
};
