
// Time: Best: O(n), Worst: O(n^2) | Space: O(1)
function bubbleSort(array) {
    let isSorted = false;
    while(!isSorted) {
        isSorted = true;
        idx = 0;
        for(let i=0; i<array.length-idx; i+=1) {
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
                isSorted = false;
            }
        }
        idx+=1;
    }
}

let array = [5, 4, 3, 10, 5];
bubbleSort(array);
console.log(array);


