// Lecture 58

let array1 = [1, 2, 3, 9];
let array2 = [1, 2, 4, 4];

function hasPairWithSum(arr, sum) {
  // Time Complexity O(n^2)
  // Space Complexity O(1)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

let boolValue = hasPairWithSum(array1, 8);
console.log(boolValue);
boolValue = hasPairWithSum(array2, 8);
console.log(boolValue);

// Time Complexity O(n)
// Space Complexity O(1)
// This solution works for ordered list
function hasPairWithSum2(arr, sum) {
  let i = 0; // First Element
  let j = arr.length - 1; // Last Element
  while (i !== j) {
    let sumElements = arr[i] + arr[j];
    if (sumElements === sum) {
      return true;
    } else if (sumElements > sum) {
      j--;
    } else if (sumElements < sum) {
      i++;
    } else {
      // Do Nothing
    }
  }
  return false;
}

boolValue = hasPairWithSum2(array1, 8);
console.log(boolValue);
boolValue = hasPairWithSum2(array2, 8);
console.log(boolValue);

// Unordered list
let array3 = [3, 9, 2, -1];
let array4 = [6, 4, 3, 2, 1, 7];

// Time Complexity O(n)
// Space Complexity O(n)
function hasPairWithSum3(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    let corValue = sum - arr[i];
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(corValue);
  }
  return false;
}

boolValue = hasPairWithSum3(array3, 8);
console.log(boolValue);
boolValue = hasPairWithSum3(array4, 9);
console.log(boolValue);
