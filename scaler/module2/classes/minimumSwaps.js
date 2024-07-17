function minimumSaps(A, B) {
  let numberOfSwapsRequired = 0; // Initialise answer
  let lenOfArray = A.length;
  let numbersLessThanEqB = 0; // This will help us decide the size of our sliding window. Let's say these are good elements.
  for (let i = 0; i < lenOfArray; i++) {
    if (A[i] <= B) {
      numbersLessThanEqB++;
    }
  }
  let numbersGreaterThanB = 0; // Bad elements
  // Find the number of swaps required in first sliding window of length - numbersLessThanEqB. The idea is simple,
  // the number of items which are bad elements are the ones that needs to be swapped.
  // So numbersGreaterThanB = Number of bad elements = Number of swaps needed
  for (let j = 0; j < numbersLessThanEqB; j++) {
    if (A[j] > B) {
      numbersGreaterThanB++;
    }
  }
  numberOfSwapsRequired = numbersGreaterThanB; // We set the answer based on first window

  let start = 1; // We start the next window from 1
  let end = numbersLessThanEqB;
  // Essentially we are traversing all windows and finding the number of bad elements(swaps needed)
  while (end < lenOfArray) {
    // Check the end is not crossing the array length
    let prevElement = 0;
    let nextElement = 0;
    if (A[start - 1] > B) {
      // Check for bad element. Good elements won't have an impact.
      prevElement++;
    }
    if (A[end] > B) {
      nextElement++;
    }
    // We remove the previous element(if bad) and add the next element(if bad)
    numbersGreaterThanB = numbersGreaterThanB - prevElement + nextElement;
    numberOfSwapsRequired = Math.min(
      numberOfSwapsRequired,
      numbersGreaterThanB
    ); // Find min swaps
    start++;
    end++;
  }
  return numberOfSwapsRequired;
}

A = [
  52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5,
  84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29,
  7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70,
];
B = 19;
// A = [1, 12, 10, 3, 14, 10, 5];
// B = 8;
let ret = minimumSaps(A, B);
console.log(ret);
