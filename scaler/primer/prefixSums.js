function prefixSums(A) {
  let prefixEven = [];
  let prefixOdd = [];
  let suffixEven = [];
  let suffixOdd = [];
  let prefixSumEven = 0;
  let prefixSumOdd = 0;
  let suffixSumEven = 0;
  let suffixSumOdd = 0;
  let sumEven = 0;
  let sumOdd = 0;
  let count = 0;

  // Prefix Sum - O(n)
  for (let i = 0; i < A.length; i++) {
    if ((i + 1) % 2 !== 0) {
      prefixSumOdd = prefixSumOdd + A[i];
      prefixOdd.push(prefixSumOdd);
      prefixEven.push(prefixSumEven);
    } else {
      prefixSumEven = prefixSumEven + A[i];
      prefixEven.push(prefixSumEven);
      prefixOdd.push(prefixSumOdd);
    }
  }
  console.log("prefixOdd", prefixOdd);
  console.log("prefixEven", prefixEven);

  // Suffix Sum - O(n)
  for (let i = A.length - 1; i >= 0; i--) {
    if ((i + 1) % 2 !== 0) {
      suffixSumOdd = suffixSumOdd + A[i];
      suffixOdd[i] = suffixSumOdd;
      suffixEven[i] = suffixSumEven;
    } else {
      suffixSumEven = suffixSumEven + A[i];
      suffixEven[i] = suffixSumEven;
      suffixOdd[i] = suffixSumOdd;
    }
  }
  console.log("suffixOdd", suffixOdd);
  console.log("suffixEven", suffixEven);

  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      sumEven = suffixEven[i + 1];
      sumOdd = suffixOdd[i + 1];
    } else if (i === A.length - 1) {
      sumEven = prefixEven[i - 1];
      sumOdd = prefixOdd[i - 1];
    } else {
      sumEven = prefixEven[i - 1] + suffixOdd[i + 1];
      sumOdd = prefixOdd[i - 1] + suffixEven[i + 1];
    }
    if (sumEven === sumOdd) {
      count++;
    } else {
      sumEven = 0;
      sumOdd = 0;
    }
  }
  return count;
}

let ret = prefixSums([5, 5, 2, 5, 8]);
console.log(ret);
