

// Monothonic: Strictly increasing | descreasing
// [-1, -5, -1100, -1100, -1500] ✅

/*

Y
|
|            /              \
|           /                \
|    _ _ _ /                   _ _ _ _ _ _ 
|   /                                      \ 
|  /                                        \
| /                                          \
================== X        ========================

*/

// Time: O(n) | Space: O(1)
function monothonicArray(array) {
  if (!array) return null;
  if (array.length === 1) return true;
  let dicrection = null; // 1: down | 0: up | null: not find

  for(let i=1; i<array.length; i++) {
    let calc = array[i-1] > array[i];
    if(array[i-1] == array[i]) {
      continue;
    }
    else if(calc) {
      if (dicrection == null)
        dicrection = 0
      else if(dicrection != 0)
        return false;
    }
    else {
      if (dicrection == null)
        dicrection = 1
      else if(dicrection != 1)
        return false;
    }
  }
  return true;
}

console.log(monothonicArray([1, 3, 2])); // false

