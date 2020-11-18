function insertionSort(array) {
    for (let j = 1; j < array.length; j++) {
        key = array[j];
        i = j - 1;
        while (i >= 0 && array[i] > key) {
            array[i + 1] = array[i];
            i = i - 1;
        }
        array[i + 1] = key;
    }
    return array;
}


console.log(insertionSort([1,4,2,3,7,5,8,34,6,7]))
console.log(insertionSort([1,15,23,11,13,14,16,4,2,3,7,5,8,34,6,7]))
console.log(insertionSort([10,43,233,567,4,33,0,1,4,2,3,7,5,8,34,6,7]))