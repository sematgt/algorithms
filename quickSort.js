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

//quick sort with random index

/*

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const pivot = arr[randomIndex];
        const less = arr.slice(0).filter((el, k) => el < pivot && k !== randomIndex);
        const greater = arr.slice(0).filter((el, k) => el >= pivot && k !== randomIndex);

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

console.log(quickSort([2,3,4,435,345,22,5,6,7,4,53,4,4,32,234,234,2,565,645,64]))

*/