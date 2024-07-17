// A = 3, B = 2
// Ans = 11100

function(A, B){
    if (A == 0) return 0;
    let totalDigits = A + B;
    let num = 0;
    for (let i = totalDigits; i > B; i--) {
        num = num | (1 << (i - 1)); 
    }
    return num;
}