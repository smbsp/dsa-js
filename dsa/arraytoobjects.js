// Lecture 57

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
  // O(a*b)
  // O(1) - Space Complexity
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "b"];

let boolVal = containsCommonItem(array1, array2);
console.log(boolVal);

let map = {};
function containsCommonItem2(arr1, arr2) {
  // O(a + b) Time Complexity
  // O(a) Space Complexity
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]] === true) {
      console.log("Match Found");
      break;
    }
  }
}

containsCommonItem2(array1, array2);

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

let containsCommonItem3Val = containsCommonItem3(array1, array2);
console.log(containsCommonItem3Val);
