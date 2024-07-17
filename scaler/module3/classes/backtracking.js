// This is the main function to solve the problem.
// It initializes a counter object and then starts the recursive permutation and validation process.
// Time Complexity: O(n! * n) - In the worst case, you are generating all possible permutations and checking each permutation.
// Space Complexity: O(n) - Depth of the recursive call can go up to n.
function solve(A) {
  let retCount = { count: 0 }; // Initialize the counter to zero.
  helper(A, 0, retCount); // Start the recursive helper function from index 0.
  return retCount.count; // Return the final count after all permutations have been checked.
}

function helper(arr, index, returnCount) {
  console.log(arr, index, returnCount);
  // Base condition: if we've generated a permutation up to the end of the array.
  if (index === arr.length - 1) {
    // Check if the last pair of numbers in the permutation has the desired property.
    if (isPerfectSquare(arr[index] + arr[index - 1])) {
      returnCount.count++; // Increment the count if the property is satisfied.
      console.log("count", returnCount.count, arr, index);
      return; // Exit from the function since this permutation has been checked.
    }
  }

  // Loop through the array to generate permutations.
  for (let i = index; i < arr.length; ++i) {
    // If the current number is the same as the number at the current index and we're not at the initial index,
    // we skip this iteration to avoid repeated permutations.
    if (i != index && arr[i] == arr[index]) continue;

    // Swap the numbers at the current index and the ith position to generate a new permutation.
    // console.log("prevarr", arr, index, i);
    [arr[i], arr[index]] = [arr[index], arr[i]];
    // console.log("arr", arr);
    // If we're at the beginning of the array, or the current number and its predecessor satisfy the desired property,
    // we move on to the next index.
    if (
      index == 0 ||
      (index > 0 && isPerfectSquare(arr[index] + arr[index - 1]))
    ) {
      helper(arr, index + 1, returnCount);
    }

    // Swap the numbers back to their original position to backtrack and generate the next permutations.
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
}

// Utility function to check if a number is a perfect square.
// Time Complexity: O(1)
// Space Complexity: O(1)
function isPerfectSquare(num) {
  const root = Math.sqrt(num); // Compute the square root of the number.
  return root === Math.floor(root); // Check if the root is an integer. If yes, it's a perfect square.
}

let A = [36229, 1020, 69, 127, 162, 127];
let ret = solve(A);
console.log(ret);
