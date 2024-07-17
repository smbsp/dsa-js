// A = [7,7,4,5,3]
// Ans = 7 * 5 = 35. 7 and 5 are greater than adjacent right numbers

function(A){
    if (A.length <= 1) return 0;
    let ans = 1n;
    let modValue = ((10n ** 9n) + 7n);
    for (let i = 0n; i < A.length - 1; i++) {
        if (BigInt(A[i]) > BigInt(A[BigInt(i)+1n])) {
            ans = (((BigInt(A[i]) % modValue) * (ans % modValue)) % modValue);
        }
    }
    return ans == 1n ? 0 : parseInt(ans % modValue);
}