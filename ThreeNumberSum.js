
// Time: O(n^2) | Space: O(1)
function threeNumSum(array, target) {
    if(array.length < 1)
        return [];
    
    let sortedArray = array.sort((a, b) => a-b);
    // <- means we get smaller
    // -> means we get bigger
    let final = [];

    for(let i=0; i<sortedArray.length-1; i+=1) {
        let left = i+1;
        let right = sortedArray.length-1;
        while(left < right) {
            let curSum =
                sortedArray[i] + sortedArray[left] + sortedArray[right];
            if(curSum == target) {
                final.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
                left+=1;
                right-=1;
            }
            else if(curSum < target)
                left+=1;
            else
                right-=1;
            }
    }
    return final;
}

console.log(threeNumSum([/**/], 0));

