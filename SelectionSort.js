
// Time: O(n^2) | Space: O(1)
function selectionSort(array) {
    for(let i=0; i<array.length; i+=1) {
        let smaller = i;
        for(let j=i+1; j<array.length; j+=1) {
            if(array[j] < array[smaller])
                smaller = j;
        }
        [array[i], array[smaller]] = [array[smaller], array[i]];
    }
}


let array = [5, 4, 3, 10, 5];
selectionSort(array);
console.log(array);

