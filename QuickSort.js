
// Time: Best, Average: O(n*Logn), Worst: O(n^2) || Space: Best, Average: O(n*Logn), Worst O(n^2)
function quickSort(array) {
    let sorted = helper(array, 0, array.length-1);
    return sorted;
}

Array.prototype.flatten = function () {
    var ret = [];
    for (var i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            ret = ret.concat(this[i].flatten());
        } else {
            ret.push(this[i]);
        }
    }
    return ret;
};

function helper(array, start, end) {
    if(start >= end)
        return array;
    
    let pivot = array[end];
    var left = [];
    var right = [];

    for(let i=0; i<=end-1; i++) {
        if(array[i] <= pivot) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    
    return [helper(left, 0, left.length-1), pivot, helper(right, 0, right.length-1)].flatten();
}

let array = [10, 9, 8, 7, 5, 4, 4, 3, 2, 1];
console.log(quickSort(array));

