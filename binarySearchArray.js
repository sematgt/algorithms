// O(log(n)) time complexity
// O(n) space complexity

function binarySearch(arr, n) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((high - low)/2) + low;

        if (n === arr[mid]) return mid;

        if (n > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,4,5,6,8,15], 5),
binarySearch([1,2,4,5,6,8,15], 1),
binarySearch([1,2,4,5,6,8,15], 15),
binarySearch([1,2,4,5,6,8,15], 5222))