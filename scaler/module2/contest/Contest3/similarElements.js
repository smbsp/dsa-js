// If number of occurunces of all elements in array is 1 then return 1 else return 0

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let arrElements = new Set();
    for (let i = 0; i < A.length; i++) {
      if (arrElements.has(A[i])) {
        return 0;
      } else {
        arrElements.add(A[i]);
      }
    }
    return 1;
  },
};
