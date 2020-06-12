

function spriralTraverse(matrix) {
  let sc = 0, sr = 0;
  let ec = matrix[0].length-1;
  let er = matrix.length-1;
  let i = 0;
  var final = [];

  while(sc < ec || sr < er) {
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
  [5, 6, 7, 8],
  [9,10,11,12]
]

let final = spriralTraverse(matrix);
console.log(final);
