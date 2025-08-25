export const random = (lower = 0, upper = 1, floating = false) => {
  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }

  if (floating) {
    return lower + (Math.random() * (upper - lower));
  }

  return Math.floor(lower + (Math.random() * (upper - lower + 1)));
};
