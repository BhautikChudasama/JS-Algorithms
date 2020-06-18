
// Asked by Google

// Cat: Easy

// Time: O(n) | Space: O(n)

/**
 * @param {string} str1 string one
 * @param {string} str2 string two
 * @returns {boolean} return true if one-on-one character match else false.
 */
function characterMatch(str1, str2) {
  if(str1.length != str2.length)
    return false;
  
  let history = {};

  for(let i=0; i<str1.length; i+=1) {
    // If in the hash
    if(history[str1[i]]) {
      if(history[str1[i]] != str2[i])
        return false;
    }
    else 
      history[str1[i]] = str2[i];
  }

  return true;
}

console.log(characterMatch("abc", "def"));
console.log(characterMatch("aac", "def"));

