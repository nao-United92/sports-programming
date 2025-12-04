export const clamp = (number, lower, upper) => {
  number = +number;
  lower = +lower;
  upper = +upper;
  
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;

  if (lower > upper) {
    [lower, upper] = [upper, lower];
  }

  if (number !== number) { // if number is NaN, return NaN
    return number;
  }
  if (number > upper) return upper;
  if (number < lower) return lower;
  return number;
};

export const inRange = (number, start, end) => {
  number = +number;
  if (end === undefined) {
    end = start;
    start = 0;
  }
  start = +start;
  end = +end;

  if (start > end) {
    [start, end] = [end, start];
  }
  return number >= start && number < end;
};
