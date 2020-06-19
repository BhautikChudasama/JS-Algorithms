
// Asked by Apple

// Time: O(logN) | Space: O(1) 

class ListFastSum {
  constructor(nums) {
    this.nums = nums;
  }
  /**
   * @param {number} startIdx starting index.
   * @param {number} endIdx endIdx is exclusive.
   * @returns {number} sum from startIdx to endIdx(exclude). 
   */
  sum(startIdx, endIdx) {
    let sum = 0;
    if(startIdx == endIdx) {
      sum+=this.nums[startIdx];
      return sum;
    }
    endIdx-=1;
    while(startIdx < endIdx) {
      sum+=(this.nums[startIdx]+this.nums[endIdx]);
      startIdx+=1;
      endIdx-=1;
    }
    if(startIdx == endIdx) {
      sum+=this.nums[startIdx];
    }
    return sum;
  }
}


let s = new ListFastSum([1, 2, 3, 4, 5, 6, 7]);
console.log(s.sum(4, 4));
