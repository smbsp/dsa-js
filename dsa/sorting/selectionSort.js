const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const newnumbers = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7];

function selectionSort(array) {
  let smallest = array[0];
  let id = 0;
  for (let j = 0; j < array.length; j++) {
    for (let i = j; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
        id = i;
      }
      // console.log(smallest, id);
    }
    let temp = array[j];
    array[j] = array[id];
    array[id] = temp;
    smallest = array[j + 1];
    id = j + 1;
    console.log("Array: ", array);
  }
  return array;
}

let arr = selectionSort(numbers);
console.log(arr);
