const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 0, 4];
const newNumbers = [3, 7, 8, 5, 2, 1, 9, 5, 4];

function quickSort(array, left, right) {
  let partitionIndex, len;
  len = array.length - 1;
  if (left < right) {
    partitionIndex = quickSortHelper(array, array[right], left, right);
    // console.log("Return", partitionIndex, array, left, right);
    // console.log("Check1", left, partitionIndex - 1);
    if (left === partitionIndex - 1) {
      // console.log("left & right", left, right);
      quickSort(array, right + 2, len);
    } else if (partitionIndex === 0) {
      quickSort(array, partitionIndex + 1, len);
    } else {
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
  }
  return array;
}

function quickSortHelper(array, pivot, left, right) {
  // console.log("Input", array, pivot, left, right);
  let i = left;
  while (true) {
    if (array[i] > pivot) {
      temp = array[right - 1];
      if (i === right - 1) {
        array[right - 1] = pivot;
        array[right] = temp;
      } else {
        array[right - 1] = pivot;
        array[right] = array[i];
        array[i] = temp;
      }
      right--;
      i = 0;
    } else if (i === right) {
      return i;
    } else {
      i++;
    }
  }
}

//Select first and last index as 2nd and 3rd parameters
let num = quickSort(newNumbers, 0, newNumbers.length - 1);
console.log("New Numbers ", num);

num = quickSort(numbers, 0, numbers.length - 1);
console.log("Numbers :", num);
