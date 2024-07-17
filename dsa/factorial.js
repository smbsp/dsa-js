// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  debugger;
  if (number === 2 || number === 1 || number === 0) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}
findFactorialRecursive(5);

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
}

let ret = findFactorialRecursive(3);
console.log(ret);
ret = findFactorialIterative(5);
console.log(ret);
