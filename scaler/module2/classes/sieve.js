function sieve(A) {
  // Actual Sieve of Eratosthenes algorithm implementation
  // Time Complexity = O(nlog(log(n))), Space Complexity = O(n)
  if (A < 0) {
    // Edge Case
    return 0;
  }
  let count = 0;
  let arrNum = new Array(A + 1).fill(true);
  arrNum[0] = false;
  arrNum[1] = false;

  for (let j = 2; j * j <= A; j++) {
    if (arrNum[j]) {
      for (let k = j * j; k <= A; k = k + j) {
        if (arrNum[k]) {
          arrNum[k] = false;
        }
      }
    }
  }

  for (let l = 0; l < arrNum.length; l++) {
    if (arrNum[l]) {
      count++;
    }
  }

  return count;
}

let ret = sieve(2500);
console.log(ret);
