
function isIsland(i, j, mat) {
//  console.log("Calling...0");
  var land = false;
  
  // Base case if mat len is 1
  if(mat[0].length == 1 && mat.length == 1)
      return true;
  
  // left
  if(j>0) {
    if(mat[i][j-1] == 1 || mat[i][j-1] == -1) {
      land = true;
      mat[i][j-1] = -1;
    }
  }     
  //right
  if(j<mat[0].length-1) {
    if(mat[i][j+1] == 1 || mat[i][j+1] == 1) {
       land = true;
       mat[i][j+1] = -1;
    }
  }
  
  if(i>0) {
    // top
    if(mat[i-1][j] == 1 || mat[i-1][j] == -1) {
       land = true;
       mat[i-1][j] = -1;
    }
  }
  if(i<mat.length-1) {
    // bottom
    if(mat[i+1][j] == 1 || mat[i+1][j] == -1) {
       land = true;
       mat[i+1][j] = -1;
    }
  }
  
  if(land)
     return land;
  
  // left
  if(j>0) {
    if(mat[i][j-1] == 0) {
      land = true;

    }
  }     
  //right
  if(j<mat[0].length-1) {
    if(mat[i][j+1] == 0) {
       land = true;
  
    }
  }
  
  if(i>0) {
    // top
    if(mat[i-1][j] == 0) {
       land = true;
       
    }
  }
  if(i<mat.length-1) {
    // bottom
    if(mat[i+1][j] == 0) {
       land = true;
    }
  }
  
  return land;
}


function findIsland(mat) {
  var width = mat[0].length;
  var height = mat.length;
  var noOfIslands = 0;
 
  for(var i=0; i<=height-1; i+=1) {
    for(var j=0; j<=width-1; j+=1) {
      if(mat[i][j] == 1) {
         mat[i][j] = -1;
         var x = isIsland(i, j, mat);
         if(x) {
           noOfIslands = noOfIslands + 1;
        }
      }
    }
  }

  console.log(mat);
  return noOfIslands;
}


var mat = [
  [1, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0]
];

console.log("islands: "+findIsland(mat));

