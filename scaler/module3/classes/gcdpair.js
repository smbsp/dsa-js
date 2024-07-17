function gcdpair(A) {
  // e.g. A = [2, 2, 2, 2, 8, 2, 2, 2, 10]
  let retArr = [];
  let arrElements = new Map();
  // We need to sort as the items on the left that are not derived from gcd of other numbers must come first
  // and directly be pushed to the retArr
  A.sort((a, b) => b - a);
  // console.log(A); // helpful to debug

  // Looping through all the sorted arrElements
  for (let i = 0; i < A.length; i++) {
    let freq = arrElements.get(A[i]); // We check if the element exist in the hashmap
    if (freq > 0) {
      // if the element exists in hashmap, that means the number is derived from GCD of two numbers
      // Since, this is derived, we substract it from the hashmap. This helps us in identifying numbers
      // that are not derived from GCD of different numbers e.g. We discard 2 derived from
      // GCD of (8 and 10) but keep 2 derived from GCD of (2 and 2).
      arrElements.set(A[i], freq - 1); // reduce freq by 1
    } else {
      // We loop through the retArr and add count to the numbers derived from the base numbers. (10,8) has GCD 2.
      // So combination of 8,10 and 10,8 is why we add 2.
      for (let j = 0; j < retArr.length; j++) {
        let gcdOfRetArr = gcd(A[i], retArr[j]); // The new number that we will push to the retArr
        let freqOfGCD = 0;
        if (arrElements.has(gcdOfRetArr)) {
          freqOfGCD = arrElements.get(gcdOfRetArr);
        }
        arrElements.set(gcdOfRetArr, freqOfGCD + 2); // increase freq by 2
      }
      retArr.push(A[i]);
      // console.log(retArr, arrElements); // helpful to debug
    }
  }
  return retArr; // We do not need to sort as any order is expected
}

function gcd(A, B) {
  if (B == 0) return A;
  return gcd(B, A % B);
}

// A = [2, 2, 2, 2, 8, 2, 2, 2, 10];
A = [
  1, 299, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 503, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 866, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2,
  1, 1, 2, 714, 2, 1, 17, 2, 6, 2, 34, 1, 14, 1, 2, 1, 6, 21, 2, 6, 3, 2, 1, 1,
  6, 1, 1, 2, 2, 622, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1,
  2, 1, 1, 1, 1, 1, 131, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 131, 1, 1, 1,
  1, 1, 1, 1, 17, 1, 1, 187, 1, 11, 1, 17, 11, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1,
  1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 256, 4, 4, 8, 1, 2, 1, 4, 1, 16, 1, 2, 8, 1, 4,
  1, 1, 2, 1, 1, 2, 6, 2, 1, 11, 4, 396, 4, 4, 11, 2, 1, 4, 1, 36, 99, 2, 396,
  3, 4, 1, 1, 18, 1, 1, 2, 2, 2, 1, 1, 4, 4, 596, 4, 1, 2, 1, 4, 1, 4, 1, 2, 4,
  1, 4, 1, 1, 2, 1, 1, 2, 34, 2, 1, 17, 8, 4, 4, 136, 1, 2, 1, 4, 1, 8, 1, 2, 8,
  1, 4, 1, 1, 2, 1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 407, 1, 1, 1, 1, 1, 11, 37,
  11, 1, 1, 1, 1, 1, 1, 1, 2, 14, 2, 1, 1, 2, 2, 2, 2, 1, 994, 1, 2, 1, 2, 7, 2,
  2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 521, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 4, 4, 4, 4, 1, 2, 1, 692, 1, 4, 1, 2,
  4, 1, 4, 1, 1, 2, 23, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 713, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 2, 1, 1, 16, 36, 4, 8, 1, 2, 1, 4, 1, 720, 9, 2,
  72, 3, 4, 1, 5, 18, 1, 1, 1, 21, 1, 1, 11, 1, 99, 1, 1, 11, 7, 1, 1, 1, 9,
  693, 1, 99, 3, 1, 1, 1, 9, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 37, 2, 1, 2, 1, 2,
  1, 74, 2, 1, 2, 1, 1, 2, 1, 1, 2, 6, 2, 1, 11, 8, 396, 4, 8, 11, 2, 1, 4, 1,
  72, 99, 2, 792, 3, 4, 1, 1, 18, 1, 1, 1, 3, 1, 131, 1, 1, 3, 1, 1, 1, 1, 1, 1,
  1, 3, 3, 1, 3, 393, 1, 1, 1, 3, 1, 1, 2, 2, 2, 1, 1, 4, 4, 4, 4, 1, 2, 1, 4,
  1, 4, 1, 2, 4, 1, 556, 1, 139, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 103, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 5, 1, 1, 1, 139, 1, 1, 695, 1, 1, 1, 2, 6, 2, 1, 1, 2, 18, 2, 2, 1, 2, 1,
  2, 1, 18, 9, 2, 18, 3, 2, 1, 1, 738,
];
console.log(gcdpair(A));
// gcdpair(A);
