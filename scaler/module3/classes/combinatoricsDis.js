let MOD;

module.exports = {
  //param A : integer

  //param B : integer

  //param C : integer

  //return an integer

  solve: function (A, B, C) {
    MOD = C;

    //pre compute factorial values for each number till A

    let factArr = new Array(A + 1);

    factArr[0] = 1;

    for (let i = 1; i <= A; i++) {
      factArr[i] = this.mult(i, factArr[i - 1]);
    }

    //nCr = n! / (n-r)! r!

    // n!
    console.log(factArr[A], factArr[A - B], factArr[B]);
    let nFact = factArr[A];

    let divisor = this.mult(factArr[A - B], factArr[B]);

    let inverseOfDenom = this.power(divisor, C - 2);

    return this.mult(nFact, inverseOfDenom);
  },

  mult: function (a, b) {
    let val = a * b;

    if (val < Number.MAX_SAFE_INTEGER && val > Number.MIN_SAFE_INTEGER) {
      return val % MOD;
    }

    return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
  },

  power: function (a, b) {
    let res = 1;

    while (b > 0) {
      if (b & 1) res = this.mult(res, a);

      a = this.mult(a, a);

      b >>= 1;
    }

    return res;
  },
};
