
function sum(x) {
  return function(y) {
    if(y)
      return sum(x+y);
    return x;
  }
}

console.log(sum(1)(2)(3)(4)()); // 10

/*

sum(1)
  1+sum(2)
    3+sum(3)
      6+sum(4)
        10+(undefined)
          10
          
*/


