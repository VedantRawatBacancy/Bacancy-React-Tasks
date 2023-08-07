function kalkuleight(arr) {
  const duplicates = {};
  let count = 0;

  // Count occurrences of each element in the array
  for (const element of arr) {
    duplicates[element] = (duplicates[element] || 0) + 1;
  }

  // Count the number of elements with more than one occurrence
  for (const key in duplicates) {
    if (duplicates[key] > 1) {
      count++;
    }
  }

  return count;
}

module.exports = { kalkuleight };