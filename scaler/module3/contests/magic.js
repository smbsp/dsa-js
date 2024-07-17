function updateArray(A) {
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num = (num << 1) + A[i];
    console.log(num);
    if (num % 5 === 0) {
      A[i] = 1;
    } else {
      A[i] = 0;
    }
  }

  return A;
}

console.log(updateArray([1, 0, 1, 0, 0]));
