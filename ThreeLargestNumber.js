// Time: O(n) | Space: O(1)
function findTreeLargetNumber(array) {
    if(array.length < 3)
        return array;
    
    let threeLarge = [null, null, null];
    for(let i = 0; i < array.length; i++) {
        helper(array[i], threeLarge);
    }
    return threeLarge;
}

// Time: O(2n) => O(n) | Space: O(1)
function helper(ele, threeLarge) {
    if(threeLarge[2] == null || ele > threeLarge[2]) {
        shiftUpdate(threeLarge, ele, 2);
    }
    else if(threeLarge[1] == null || ele > threeLarge[1]) {
        shiftUpdate(threeLarge, ele, 1);
    }
    else if(threeLarge[0] == null || ele > threeLarge[0])
        shiftUpdate(threeLarge, ele, 0);
}

// Time: O(n) | Space: O(1)
function shiftUpdate(threeLarge, ele, pos) {
    for(let i=0; i<pos+1; i++) {
        if(i == pos)
            threeLarge[pos] = ele;
        else
            threeLarge[i] = threeLarge[i+1];
    }
}



console.log(findTreeLargetNumber([6, 5, 100, 85, 1, 85]));
// 85, 85, 100
