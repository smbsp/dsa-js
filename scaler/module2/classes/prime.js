function isPrime(A) {
  if (A === 1) {
    return 0;
  }
  let numberOfFactors = countFactors(A);
  if (numberOfFactors === 2) {
    return 1;
  }
  return 0;
}

// Better readability and possible reuse of the function to find number of factors
function countFactors(A) {
  let count = 0;
  for (let i = 1; i * i <= A; i++) {
    if (Number(BigInt(A) % BigInt(i)) === 0) {
      if (i === Number(BigInt(A) / BigInt(i))) {
        console.log("I");
        count++;
      } else {
        count = count + 2;
      }
    }
  }
  return count;
}

let ret = isPrime(2);
console.log(ret);
