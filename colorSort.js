// Time: O(n) | Space: O(1)
function sortColor(array) {
  if(array.length <= 1) 
    return array;
  
  let left = 0;
  let right = array.length - 1;
	let cur = 0;

  while(cur < right) {
    if(array[cur] == 1) {
			temp = array[left];
			array[left] = array[cur];
			array[cur] = temp;
			cur+=1;
			left+=1;
		}
    else if(array[cur] == 2) {
      cur+=1;
    }
		else {
			temp = array[right];
			array[right] = array[cur];
			array[cur] = temp;
			right-=1;
		}
  }
}

let array = [3, 1, 3, 2, 2, 3, 2];
sortColor(array);
console.log(array);

