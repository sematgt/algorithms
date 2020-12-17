// O(n**2)

function bubbleSort(array) {
    let finish = array.length - 1;
    
    while (finish !== 0) {
        let changes = false;

        for (let i = 0; i < finish; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1);
                changes = true;
            }
        }

        if (!changes) {
            return array;
        }

        finish--;
    }

    return array;

    function swap(a, b) {
        let c = array[a];
        array[a] = array[b];
        array[b] = c;
    }
}


console.log(bubbleSort([5,4,3,6,7,8,5,6,4,2]))