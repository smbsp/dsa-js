// A = [1,5,3,9,7]
// B = 2
// Is it an AP with r = B?

function(A, B){
    A.sort((a,b) => a - b); // sorts in ascending order
    for (let i = 1; i < A.length; i++) {
        if (A[i] - A[i-1] != B) {
            return "No";
        }
    }
    return "Yes";
}