function binarySearch(array, item) {
    let first = 0;
    let middle;
    let last = array.length - 1;
    while (first < last) {
        middle = Math.floor((last - first) / 2) + first;
        if (item === array[middle]) {
            return middle;
        } else if (item < array[middle]) {
            last = middle;
        } else {
            first = middle;
        }
        console.log(first, middle, last)    
    }

    return first;
}

console.log(binarySearch([1,2,4,6,8,9,11,13,15,16], 11) === 6)
console.log(binarySearch([1,2,4,6,8,9,11,13,15,16], 15) === 8)
console.log(binarySearch([1,2,4,6,8,9,11,13,15,16], 2) === 1)