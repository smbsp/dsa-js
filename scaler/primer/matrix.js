function matrix(A, B) {
  const MOD = 1000000007;
  let sol = [];
  let sumA = 0;
  let sumB = 0;
  let tempSumA = 0;
  let tempSumB = 0;

  for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < A[i].length; j++) {
      row.push(undefined);
    }
    sol.push(row);
  }

  // Prefix sum top-down of A
  if (A[0].length > 1) {
    for (let i = 1; i < A.length; i++) {
      for (let j = 0; j < A[i].length; j++) {
        A[i][j] = A[i][j] + A[i - 1][j];
      }
    }
  }

  // Prefix sum right-left of B
  if (B[0].length > 1) {
    for (let i = 0; i < B.length; i++) {
      for (let j = 1; j < B[i].length; j++) {
        B[i][j] = B[i][j] + B[i][j - 1];
      }
    }
  } else {
    for (let i = 1; i < B.length; i++) {
      for (let j = 0; j < B[i].length; j++) {
        B[i][j] = B[i][j] + B[i - 1][j];
      }
    }
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (j - 1 < 0) {
        tempSumA = 0;
      } else {
        tempSumA = sol[i][j - 1];
      }
      if (i - 1 < 0) {
        tempSumB = 0;
      } else {
        tempSumB = sol[i - 1][j];
      }
      if (A[0].length === 1) {
        let temp = tempSumB;
        tempSumB = tempSumA;
        tempSumA = temp;
      }
      sumA = A[i][j] + tempSumA;
      sumB = B[i][j] + tempSumB;
      if (sumA >= sumB) {
        sol[i][j] = sumA;
      } else {
        sol[i][j] = sumB;
      }
    }
  }
  return sol[sol.length - 1][sol[0].length - 1] % MOD;
}

A = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
];
B = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// A = [[3], [2], [9]];
// B = [[8], [9], [2]];

// A = [[1], [0], [1]];
// B = [[2], [1], [0]];

let ret = matrix(A, B);
console.log(ret);
