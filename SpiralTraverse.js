
// REMEMBER: How to traverse row such as

// [0, 0, 1]
// [0, 0, 2]
// [0, 0, 3]
//=============
// => [1, 2, 3]

// Time: O(n^2) | Space: O(1)
function spriralTraverse(matrix, final) {
  let sc = 0, sr = 0;
  let ec = matrix[0].length-1;
  let er = matrix.length-1;
  let i = 0;

  while(sc < ec && sr < er) {
    i = sc;
    while(i <= ec) {
      final.push(matrix[sr][i]);
      i+=1;
    }
    
    i = sr + 1;
    while(i <= er) {
      final.push(matrix[i][ec]);
      i+=1;
    }

    i = ec - 1;
    while(i >= sc) {
      final.push(matrix[er][i]);
      i-=1;
    }

    i = er - 1;
    while(i > sr) {
      final.push(matrix[i][sc]);
      i-=1;
    }

    sc+=1;
    sr+=1;
    ec-=1;
    er-=1;
  }
  return final;
}

let matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]

let final = []
spriralTraverse(matrix);
console.log(final);
