module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  let sortedArray = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      sortedArray = sortedArray.concat(matrix[i]);
    } else {
      sortedArray = sortedArray.concat(matrix[i].reverse());
    }
  }
  
  if (matrix[0][0] > matrix[matrix.length-1][0]) {
    sortedArray.reverse();
  }
  
  return sortedArray;
}
