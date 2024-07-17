const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const newnumbers = [6, 5, 3, 1, 8, 7, 2, 4];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
    console.log("Array: ", array);
  }
  return array;
}

let ret = insertionSort(newnumbers);
console.log(ret);
