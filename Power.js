
/**
 * 
 * Power(x, n) return power of x^n
 * @param {number} x
 * @param {number} n
 * return {number}
 * 
 */
function power(x, n) {
  
  if(n <= 0)
    return 1;
  if(n == 1)
    return x;
  
  let isEven = ((n%2) == 0);
 
  if(isEven) {
    return power(x*x, Math.ceil((n/2)));
  }
  else {
    let p = Math.ceil((n-1)/2);
    return x*power(x*x, p);
  }

}

console.log(power(3, 4));






