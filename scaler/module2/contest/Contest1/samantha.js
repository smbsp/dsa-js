/* 
A = [7,4,6,2,6]
B = [[0,2],[2,4],[1,4]]
Output = [2,2,3]
[0,2] i.e [7,4,6] contains 2 composite numbers
*/

function composite(A, B) {
  let retArr = [];
  let compositeArr = [];
  let compositeNumbers = 0;
  if (isComposite(A[0])) {
    compositeNumbers++;
    compositeArr.push(compositeNumbers);
  } else {
    compositeArr.push(0);
  }
  for (let i = 1; i < A.length; i++) {
    if (isComposite(A[i])) {
      compositeNumbers++;
      compositeArr.push(compositeNumbers);
    } else {
      compositeArr.push(compositeArr[compositeArr.length - 1]);
    }
  }
  for (let j = 0; j < B.length; j++) {
    let start = B[j][0];
    let end = B[j][1];
    if (start == 0) {
      retArr.push(compositeArr[end]);
    } else {
      retArr.push(compositeArr[end] - compositeArr[start - 1]);
    }
  }
  return retArr;
}

function isComposite(C) {
  let count = 0;
  for (let i = 1; i * i <= C; i++) {
    if (C % i == 0) {
      return true;
    }
  }
  return false;
}
