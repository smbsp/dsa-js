const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const newnumbers = [6, 5, 3, 1, 8, 7, 2, 4];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  //   console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let answer = [];
  if (left && right) {
    return mergeSortedArrays(left, right);
  }
}

function mergeSortedArrays(arr1, arr2) {
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
  return mergedArray;
}

const answer = mergeSort(numbers);
console.log("Answer ", answer);
