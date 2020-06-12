

// Time: O(n*Logn) | Space: O(1)
function twoNumSum(array, target) {
    let sortedArray = array.sort((a, b) => a-b);
    let left = 0;
    let right = sortedArray.length-1;
    while(left < right) {
        if((sortedArray[left] + sortedArray[right]) == target)
            return [sortedArray[left], sortedArray[right]];
        else if((sortedArray[left] + sortedArray[right]) > target)
            right-=1;
        else
            left+=1;
    }
    return [];
}

console.log(twoNumSum([-5, -4, -3, -2, 95, 4, 8], 99));


