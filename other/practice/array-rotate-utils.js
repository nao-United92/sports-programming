const rotateArray = (arr, shifts) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  const effectiveShifts = shifts % arr.length;
  if (effectiveShifts === 0) {
    return [...arr];
  }

  if (effectiveShifts > 0) {
    return [...arr.slice(effectiveShifts), ...arr.slice(0, effectiveShifts)];
  } else {
    // Negative shifts: rotate to the right
    const actualShifts = arr.length + effectiveShifts; // effectiveShifts is negative
    return [...arr.slice(actualShifts), ...arr.slice(0, actualShifts)];
  }
};

export default rotateArray;