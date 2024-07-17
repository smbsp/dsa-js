// Lecture 74

let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 30];

// Time Complexity and Space Complexity - Horrible - O(n^2)
function mergeSortedArrays(arr1, arr2) {
  let arr3 = [];
  let arr1length = arr1.length;
  let arr2length = arr2.length;
  for (let i = 0; i < arr1length; i++) {
    for (let j = 0; j < arr2length; j++) {
      if (arr1[i] < arr2[j] && !arr3.includes(arr1[i])) {
        arr3.push(arr1[i]);
      } else if (arr2[j] < arr1[i] && !arr3.includes(arr2[j])) {
        arr3.push(arr2[j]);
      } else if (arr2[j] == arr1[i]) {
        arr3.push(arr1[i]);
        arr3.push(arr2[j]);
      }
    }
  }
  if (arr1[arr1length - 1] > arr2[arr2length - 1]) {
    arr3.push(arr1[arr1length - 1]);
  } else {
    arr3.push(arr2[arr2length - 1]);
  }
  console.log(arr3);
}

// mergeSortedArrays(array1, array2);

function mergeSortedArrays2(arr1, arr2) {
  let mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 0;
  let j = 0;
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    // O(n)
    if (arr2Item === undefined || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      i++;
      arr1Item = arr1[i];
    } else {
      mergedArray.push(arr2Item);
      j++;
      arr2Item = arr2[j];
    }
  }

  console.log(mergedArray);
}

mergeSortedArrays2(array1, array2);
