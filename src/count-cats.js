/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let count = 0;

  matrix.forEach((arr) => {
    arr.forEach((_, j) => {
      if (arr[j] === "^^") {
        count += 1;
      }
    });
  });
  return count;
}
