function palindromeAppend(A) {
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[A.length - 1 - counter]) {
      let str = A.substring(i, A.length);
      console.log("str", str);
      counter++;
    } else {
      counter = 0;
    }
    console.log("counter", counter);
  }
  return A.length - counter;
}

let ret = palindromeAppend("abcdedbde");
console.log(ret);
