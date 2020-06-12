

// Time: Best: O(n), Worst: O(n^2) | Space: O(1)
function insertionSort(array) {
    for(let i=1; i<array.length; i+=1) {
        let j=i;
        while(j > 0 && array[j-1] > array[j]) {
            [array[j-1], array[j]] = [array[j], array[j-1]];
            j-=1;
        }
    }
}

let array = [5, 4, 3, 10, 5];
insertionSort(array);
console.log(array);

