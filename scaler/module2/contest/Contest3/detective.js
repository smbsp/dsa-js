// A = ["aa", "bb", "bb", "aa", "aa"];
// B = ["aa", "cc"]; // Banned
// Ans = "bb" - String bb has frequency 2(lexicographically smallest)

module.exports = {
  //param A : array of strings
  //param B : array of strings
  //return a strings
  solve: function (A, B) {
    let retString = "";
    // A.sort() - This would have been sufficient
    A.sort((a, b) => {
      for (let l = 0; l < Math.min(a.length, b.length); l++) {
        if (a[l].charCodeAt(0) < b[l].charCodeAt(0)) {
          return -1;
        } else if (a[l].charCodeAt(0) > b[l].charCodeAt(0)) {
          return 1;
        }
      }
      if (a.length < b.length) {
        return -1;
      } else if (a.length > b.length) {
        return 1;
      }
      return 0;
    });
    // console.log(A);
    let elementsOfA = new Map();
    for (let i = 0; i < A.length; i++) {
      if (elementsOfA.has(A[i])) {
        let value = elementsOfA.get(A[i]);
        elementsOfA.set(A[i], value + 1);
      } else {
        elementsOfA.set(A[i], 1);
      }
    }
    // console.log(elementsOfA);

    let elementsOfB = new Set();
    for (let j = 0; j < B.length; j++) {
      elementsOfB.add(B[j]);
    }
    // console.log(elementsOfB);

    let maxCount = 0;
    for (let k = 0; k < A.length; k++) {
      if (elementsOfB.has(A[k])) {
      } else {
        let count = elementsOfA.get(A[k]);
        // console.log(A[k],count);
        if (count > maxCount) {
          maxCount = count;
        }
      }
    }

    for (let m = 0; m < A.length; m++) {
      if (!elementsOfB.has(A[m])) {
        let retCount = elementsOfA.get(A[m]);
        if (retCount == maxCount) {
          retString = A[m];
          break;
        }
      }
    }
    return retString;
  },
};
