module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (let key of matrix[i]) {
        arr.push(key);
      } 
    } else {
      while (matrix[i].length > 0) {
        arr.push(matrix[i].pop());
      } 
    }
  }
  return arr
}
