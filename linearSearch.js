function linearSearch(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) return i;
    }

    return null;
}

console.log(linearSearch([1,4,2,3,7,5,8,34,6,7], 8))
console.log(linearSearch([1,15,23,11,13,14,16,4,2,3,7,5,8,34,6,7], 7))
console.log(linearSearch([10,233,43,567,4,33,0,1,4,2,3,7,5,8,34,6,7], 33))
console.log(linearSearch([10,233,43,567,4,33,0,1,4,2,3,7,5,8,34,6,7], 33333))