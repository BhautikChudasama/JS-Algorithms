 
 // Dynamic Programing (DP)
 // Problem divide into sub-problem + Memorization
 // T(n) = SubProblems + Time per problem

// Time: O(n) | Space: O(n)

 function fib(n) {
   var history = {0: 1, 1: 1, 2: 1};
   let ans = 0;
   for(let i=3; i<=n; i+=1) {
     history[i] = history[i-1] + history[i-2];
     ans = history[i];
   }
   return ans;
 }

 console.log(fib(6));

// Time: O(n) | Space: O(n)
// T(n) = T(n-1) + T(n-2) + O(1)
// 2T(n) = 2n-3
// T(n) = (2n-3) / 2T ::2 Cancel
// T(n) = n-3 ::constant eliminate
// T(n) = n

 var recHistory = {0: 1, 1: 1, 2: 1};
 function recFib(n) {
   if(recHistory[n]) return recHistory[n];
   return recFib(n-1) + recFib(n-2);
 }
 
 console.log(recFib(6));

