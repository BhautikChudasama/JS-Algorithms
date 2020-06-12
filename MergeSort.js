
// Time: O(n^2) || Space: O(n^2)
function mergeSort(array) {
    let sorted = mergeSortHelper(array, 0, array.length-1);
    return sorted;    
}

function mergeSortHelper(array, start, end) {
    if(start >= end)
        return array;
    let mid = Math.floor((start + end) / 2);
    let left = array.slice(0, mid+1);
    let right = array.slice(mid+1, end+1);
    return doMerge(mergeSortHelper(left, 0, left.length-1), mergeSortHelper(right, 0, right.length-1));
}

function doMerge(leftArray, rightArray) {
    if(leftArray.length <= 0 || rightArray.length <= 0)
        return;
    let index = 0;
    let i = 0;
    let j = 0;
    let sorted = [];
    while(i<leftArray.length && j<rightArray.length) {
        if(leftArray[i] <= rightArray[j]) {
            sorted.push(leftArray[i])
            i+=1;
        }
        else {
            sorted.push(rightArray[j]);
            j+=1;
        }
        index+=1;
    }
    while(i<leftArray.length) {
        sorted.push(leftArray[i]);
        i+=1;
    }
    while(j<rightArray.length) {
        sorted.push(rightArray[j]);
        j+=1;
    }
    return sorted;
}

let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(array));


