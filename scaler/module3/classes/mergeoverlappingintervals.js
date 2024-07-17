function mergeoverlappingintervals(A) {
  // console.log(A);
  A.sort((a, b) => a[0] - b[0]); // TC - O(NlogN)
  let retArr = [];
  let len = A.length;
  if (len == 1) return A; // EDGE Case
  let start = 0,
    end = 1;
  let a = A[0][start];
  let b = A[0][end];
  for (let i = 1; i < len; i++) {
    let c = A[i][start];
    let d = A[i][end];
    console.log(a, b, c, d);
    if (b < c) {
      // Do not merge
      if (i == 1) {
        retArr.push([a, b]);
      }
      retArr.push([c, d]);
      a = A[i][start];
      b = A[i][end];
    } else {
      // Merge
      a = Math.min(a, c);
      b = Math.max(b, d);
      retArr.pop();
      retArr.push([a, b]);
    }
    console.log(retArr);
  }
  return retArr;
}

let A = [
  [1, 10],
  [2, 9],
  [3, 8],
  [4, 7],
  [5, 6],
  [6, 6],
];

let ret = mergeoverlappingintervals(A);
console.log(ret);
