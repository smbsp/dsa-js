//param A : string
//return a strings
function palindrome(A) {
  let firstPart = "";
  let secondPart = "";
  let centrePart = "";
  let answer = "";
  // Edge Cases
  if (A.length == 1) {
    return 11;
  } else if (A.length == 2) {
    return A[0].concat(A[0]);
  }

  // Case A
  if (/^9+$/g.test(A)) {
    return String(BigInt(A) + BigInt(2));
  }

  // Case B
  if (isPalindrome(BigInt(A))) {
    return nextPalindrome(A);
  }

  // Case C & D
  if (A.length % 2 !== 0) {
    firstPart = A.slice(0, Math.floor(A.length / 2));
    secondPart = String(firstPart).split("").reverse().join("");
    centrePart = A[Math.floor(A.length / 2)];
    answer = firstPart + centrePart + secondPart;
  } else {
    firstPart = A.slice(0, Math.floor(A.length / 2));
    secondPart = String(firstPart).split("").reverse().join("");
    answer = firstPart + centrePart + secondPart;
  }
  if (BigInt(answer) < BigInt(A)) {
    return nextPalindrome(answer);
  } else {
    return answer;
  }
}

function nextPalindrome(A) {
  let firstHalf = "";
  let secondHalf = "";
  let centre = "";
  let ans = "";
  if (A.length % 2 === 0) {
    firstHalf = A.slice(0, Math.floor(A.length / 2));
    firstHalf = String(BigInt(firstHalf) + BigInt(1));
    secondHalf = String(firstHalf).split("").reverse().join("");
    ans = firstHalf.concat(secondHalf);
  } else {
    let numVal = BigInt(A[Math.floor(A.length / 2)]);
    if (numVal === 9) {
      firstHalf = A.slice(0, Math.floor(A.length / 2));
      firstHalf = String(BigInt(firstHalf) + BigInt(1));
      secondHalf = String(firstHalf).split("").reverse().join("");
      centre = BigInt(0);
      ans = firstHalf + centre + secondHalf;
    } else {
      firstHalf = A.slice(0, Math.floor(A.length / 2));
      secondHalf = A.slice(Math.floor(A.length / 2) + 1, A.length);
      centre = BigInt(A[Math.floor(A.length / 2)]) + BigInt(1);
      ans = firstHalf + centre + secondHalf;
    }
  }
  return ans;
}

function isPalindrome(i) {
  if (String(i).split("").reverse().join("") === String(i) && i > 9) {
    return 1;
  }
  return 0;
}

// let ret = palindrome("9");
// let ret = palindrome("74");
// let ret = palindrome(
//   "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"
// );
// let ret = palindrome("1221");
// let ret = palindrome("1991");
// let ret = palindrome("123454321");
// let ret = palindrome("123494321");
// let ret = palindrome("78321");
// let ret = palindrome("71322");
// let ret = palindrome("1234628");
// let ret = palindrome("999");
// let ret = palindrome("199991");
let ret = palindrome("125322");
// let ret = palindrome("171152");
// let ret = palindrome(
//   "9651099683484992553337438088068198972282890781586226851870982822798918608808347333552994843869901569"
// );
console.log(ret);
