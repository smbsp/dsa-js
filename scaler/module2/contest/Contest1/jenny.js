/* Longest subarray with negative numbers
A = [1,-2,-1,-2]
Output = 3
*/

// Carry Forward
function longestNegativeSubarray(A) {
  let result = 0;
  let totalNegativeIndexes = 0;
  let indexCount = -10;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      if (i - indexCount == 1 && A[i - 1] < 0) {
        totalNegativeIndexes++;
      } else {
        totalNegativeIndexes = 0;
      }
      result = Math.max(result, totalNegativeIndexes);
      indexCount = i;
    }
  }
  // console.log(indexCount, totalNegativeIndexes, result);
  if (indexCount == -10) {
    return 0;
  }
  return result + 1;
}
