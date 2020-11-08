// time complexity O(n**2)
// space complexity O(n) total, O(1) auxiliary


function selectionSort(array) {
    let lowest;
    let tmp;

    for (let start = 0; start < array.length; start++) {
        lowest = start;
        for (let i = start; i < array.length; i++) {
            if (array[i] < array[lowest]) {
                lowest = i;
            }
        }
        tmp = array[start];
        array[start] = array[lowest];
        array[lowest] = tmp;
    }

    return array;
}

console.log(selectionSort([1,4,2,3,7,5,8,34,6,7]))
console.log(selectionSort([1,15,23,11,13,14,16,4,2,3,7,5,8,34,6,7]))
console.log(selectionSort([10,233,43,567,4,33,0,1,4,2,3,7,5,8,34,6,7]))