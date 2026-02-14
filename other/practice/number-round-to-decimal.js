const roundToDecimalPlace = (num, decimalPlacesArg) => {
  if (typeof num !== 'number') {
    throw new TypeError('Expected num to be a number');
  }

  // Handle default value and type validation for decimalPlacesArg
  let decimalPlaces;
  if (decimalPlacesArg === undefined) {
    decimalPlaces = 0; // Only assign default if explicitly undefined
  } else {
    decimalPlaces = decimalPlacesArg;
  }

  if (typeof decimalPlaces !== 'number' || decimalPlaces < 0 || !Number.isInteger(decimalPlaces)) {
    throw new TypeError('Expected decimalPlaces to be a non-negative integer');
  }

  const factor = 10 ** decimalPlaces;
  return Math.round(num * factor) / factor;
};

module.exports = { roundToDecimalPlace };
