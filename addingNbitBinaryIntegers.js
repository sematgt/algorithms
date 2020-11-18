/*
Adding n-bit Binary Integers

Input: two n-element arrays A and B containing the binary digits of two
numbers a and b.
Output: an (n + 1)-element array C containing the binary digits of a + b.
*/

function addBinary(a, b) {
    let c = new Array(a.length + 1);
    let carry = 0;

    for (var i = a.length - 1; i >= 0; i--) {
        c[i+1] = (a[i] + b[i] + carry) % 2;
        if (a[i] + b[i] + carry >= 2) {
            carry = 1;
        } else {
            carry = 0;
        }
    }
    if (carry !==0) c[0] = carry;
    return c;
}

console.log(addBinary([1,0,1,1,1], [1,0,1,0,1]))
console.log(addBinary([0,1,1], [1,0,1]))
