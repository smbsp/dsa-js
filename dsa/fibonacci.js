// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8
// Recursion - O(2^n)
function fibonacciIterative(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibonacciIterative(n - 2) + fibonacciIterative(n - 1);
}

// O(n)
function fibonacciRecursive(n) {
  let sum;
  let init1 = 0;
  let init2 = 1;
  let answer = [];
  answer.push(init1);
  answer.push(init1);
  for (let i = 2; i <= n; i++) {
    sum = init1 + init2;
    answer.push(sum);
    init1 = init2;
    init2 = sum;
  }

  return answer[n];
}

// Dynamic Programming - O(n)

function fibonacciMaster() {
  //O(n)
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

let ret = fibonacciIterative(6);
console.log(ret);
ret = fibonacciRecursive(6);
console.log(ret);
const fasterFib = fibonacciMaster();
console.log(fasterFib(6));
console.log(fibonacciMaster2(6));
