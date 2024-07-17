function array(A, B) {
  let retArr = [];
  let sum = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < B.length; i++) {
    left = B[i][0];
    right = B[i][1];
    for (let j = left; j <= right; j++) {
      sum = BigInt(sum) + BigInt(A[j]);
    }
    retArr.push(parseInt(sum));
    sum = 0;
  }
  return retArr;
  //   let retArr = [];
  //   let sum = 0;
  //   let left = 0;
  //   let right = 0;
  //   for (let i = 0; i < B.length; i++) {
  //     left = B[i][0];
  //     right = B[i][1];
  //     console.log(left, right);
  //     for (let j = left; j <= right; j++) {
  //       sum += A[j];
  //     }
  //     retArr.push(sum);
  //     sum = 0;
  //   }
  //   return retArr;
}

A = [6, 3, 3, 6];
B = [
  [0, 3],
  [0, 2],
];
let ret = array(A, B);
console.log(ret);
