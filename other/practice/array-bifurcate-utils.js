export const bifurcate = (arr, filter) => {
  const bifurcated = [[], []];
  arr.forEach((item, index) => {
    bifurcated[filter[index] ? 0 : 1].push(item);
  });
  return bifurcated;
};
