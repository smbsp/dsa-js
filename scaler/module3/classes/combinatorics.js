function combinatorics(A, B, C) {
  // EDGE CASE - C is prime, thus we can use Fermat's theorem
  // TC - O(A)
  // A Combination B % C
  // aCb % c = (a!/((a-b)!*b!)) % c
  if (A < B || B < 0) return 0; // EDGE CASE
  let factA = factorial(A, C);
  let factAMinusB = factorial(A - B, C);
  let factB = factorial(B, C);
  console.log(factA, factAMinusB, factB);

  // Fermat's theorem: a^-1 ≡ a^m-2 (mod m) as C is prime
  let invFactAMinusB = powerMod(factAMinusB, C - 2, C);
  let invFactB = powerMod(factB, C - 2, C);
  console.log(invFactAMinusB, invFactB);
  return (
    (((BigInt(factA) * BigInt(invFactAMinusB)) % BigInt(C)) *
      BigInt(invFactB)) %
    BigInt(C)
  );
}

// TC - O(A)
function factorial(num, mod) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = ((fact % mod) * i) % mod;
  }
  return fact;
}

// TC - O(logA)
function powerMod(A, B, C) {
  if (A == 0) return 0;
  if (B <= 0) return 1;
  let ans = powerMod(A, Math.floor(B / 2), C);
  ans = (ans * ans) % C;
  if (B % 2 != 0) {
    ans = ((ans % C) * A) % C;
  }
  return ans;
}

combinatorics(1000000, 1, 1000000007);
