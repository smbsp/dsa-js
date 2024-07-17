// Lecture 87

// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Time Complexity O(n)
// Space Complexity O(1)
function firstRecurringCharacter(input) {
  let i = 1;
  for (let j = 0; j < i; ) {
    // console.log(j, i);
    if (input[j] === input[i]) {
      return input[j];
    }
    if (j === i - 1) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }
  return undefined;
}

// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

let array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
let array3 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
let array4 = [2, 3, 4, 5];
let ret = firstRecurringCharacter(array1);
console.log(ret);
ret = firstRecurringCharacter(array2);
console.log(ret);
ret = firstRecurringCharacter(array3);
console.log(ret);
ret = firstRecurringCharacter(array4);
console.log(ret);

// Using Maps
// Time Complexity O(n)
// Space Complexity O(n)
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    console.log(map);
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

ret = firstRecurringCharacter2(array1);
console.log(ret);
ret = firstRecurringCharacter2(array2);
console.log(ret);
ret = firstRecurringCharacter2(array3);
console.log(ret);
ret = firstRecurringCharacter2(array4);
console.log(ret);
