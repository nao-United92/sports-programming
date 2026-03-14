/**
 * Partitions an array into multiple groups based on a series of predicates.
 * Elements that don't match any predicate go into the last "remainder" group.
 * 
 * @param {Array} arr 
 * @param {...Function} predicates 
 * @returns {Array[]}
 */
const partitionMultiple = (arr, ...predicates) => {
  const groups = Array.from({ length: predicates.length + 1 }, () => []);
  
  arr.forEach((item) => {
    const index = predicates.findIndex((p) => p(item));
    if (index !== -1) {
      groups[index].push(item);
    } else {
      groups[predicates.length].push(item);
    }
  });
  
  return groups;
};

module.exports = partitionMultiple;
