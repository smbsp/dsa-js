function slidingWindow(A, B, C) {
  // BF - We can do this using brute force but the TC would be O(n^2). First loop - start and end of all
  // subarray and second loop calculating the sum.
  // We can also do this using Prefix Sum ideally with TC - O(N) and SC - O(1) as well.
  // TC - O(n) & SC - O(1) using Sliding Window approach(Carry Forward + Window)
  let sum = BigInt(0);
  // We first calculate the sum of first subarray with length B i.e. from 0 to B-1
  for (let i = 0; i < B; i++) {
    sum += BigInt(A[i]); // We add all elements
  }
  console.log("sum", sum, BigInt(C));
  if (sum == BigInt(C)) {
    // Check if the sum is already equal to C
    return 1;
  }
  // We start from next subarray. That means from index 1 to B. The reason is that the
  // subarrays will move rightwards by one index each time (for both start and end).
  let start = 1; // 0+1
  let end = B; // (B-1) + 1
  let len = A.length - 1; // Final Index
  while (end <= len) {
    // We iterate until the end pointer is the final index of the array
    // We remove the first element of the previous sum and add the next element to it
    sum = sum - BigInt(A[start - 1]) + BigInt(A[end]);
    console.log("new sum", sum, BigInt(C));
    if (sum == BigInt(C)) {
      return 1;
    }
    start++;
    end++;
  }
  return 0;
}

A = [43, 38, 72, 11, 43, 47];
B = 4;
C = 43;
let ret = slidingWindow(A, B, C);
console.log(ret);
