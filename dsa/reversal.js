//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str.length == 0) {
    return "";
  }
  //   console.log(str.substring(0, str.length - 1));
  return (
    str.substring(str.length - 1, str.length) +
    reverseString(str.substring(0, str.length - 1))
  );
}

let ret = reverseString("yoyo mastery");
console.log(ret);
//should return: 'yretsam oyoy'
