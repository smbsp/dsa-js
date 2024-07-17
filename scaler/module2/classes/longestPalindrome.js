function longestPalindrome(s) {
  if (!s || s.length < 2) {
    return s;
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    // Check for odd-length palindromes
    let palindromeOdd = expandAroundCenter(s, i, i);
    if (palindromeOdd.length > longest.length) {
      longest = palindromeOdd;
    }

    // Check for even-length palindromes
    let palindromeEven = expandAroundCenter(s, i, i + 1);
    if (palindromeEven.length > longest.length) {
      longest = palindromeEven;
    }
  }

  return longest;
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
}

const input = "abb";
const longestPalindromeSubstring = longestPalindrome(input);
console.log(longestPalindromeSubstring); // Output: "bb"
