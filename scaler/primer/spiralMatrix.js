function spiralMatrix(A) {
  let i = 0;
  let j = 0;
  let direction = 0; // 0, 1, 2, 3 - Right, Down, Left, Up
  let count = 1;
  let maxSizeRow = A - 1;
  let maxSizeCol = A - 1;
  let minSizeRow = 0;
  let minSizeCol = 0;
  let matrix = Array(A)
    .fill()
    .map(() => Array(A).fill(0));

  while (count <= A * A) {
    matrix[i][j] = count;
    if (count == 16) {
      console.log(
        "i",
        i,
        "j",
        j,
        "direction",
        direction,
        "count",
        count,
        "maxSizeRow",
        maxSizeRow,
        "maxSizeCol",
        maxSizeCol,
        "minSizeRow",
        minSizeRow,
        "minSizeCol",
        minSizeCol
      );
    }
    // Change Direction
    if (i === minSizeRow && j === maxSizeCol && direction !== 1) {
      direction = 1;
      minSizeRow++;
    } else if (i === maxSizeRow && j === maxSizeCol && direction !== 2) {
      direction = 2;
      maxSizeCol--;
    } else if (i === maxSizeRow && j === minSizeCol && direction !== 3) {
      direction = 3;
      maxSizeRow--;
    } else if (i === minSizeRow && j === minSizeCol && direction !== 0) {
      direction = 0;
      minSizeCol++;
    }

    // Calculation based on direction
    if (direction === 0) {
      j++;
    } else if (direction === 1) {
      i++;
    } else if (direction === 2) {
      j--;
    } else if (direction === 3) {
      i--;
    }
    count++;
  }

  return matrix;
}

let ret = spiralMatrix(5);
console.log(ret);
