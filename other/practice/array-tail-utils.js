// Returns all but the last element of an array.
export const tail = (arr) => (arr.length > 1 ? arr.slice(0, arr.length - 1) : []);