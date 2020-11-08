// time O(n*log(n))

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let pivot = array[0];
        let less = array.slice(1).filter(el => el <= pivot);
        let greater = array.slice(1).filter(el => el > pivot);

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

console.log(quickSort([1,3,4,5,7,3,44,5,6,23,45,89,1,0]))