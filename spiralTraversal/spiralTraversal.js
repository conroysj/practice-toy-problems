var spiralTraversal = function(spiral){
  var minRow = 0;
  var minCol = 0;
  var maxRow = spiral.length;
  var maxCol = spiral.length;
  var result = [];

  while (minRow != maxRow && minCol != maxCol) {
    // move right
    for (var i = minRow; i < maxCol; i++) {
      result.push(spiral[minRow][i]);
    }
    minRow++;
    // move down
    for (var i = minRow; i < maxRow; i++) {
      result.push(spiral[i][maxCol-1]);
    }
    maxCol--;
    if (minRow != maxRow && minCol != maxCol) {
      break;
    }
    // move left
    for (var i = maxCol-1; i >= minCol; --i) {
      result.push(spiral[maxRow-1][i]);
    }
    maxRow--;
    // move up
    for (var i = maxRow-1; i >= minRow; --i) {
      result.push(spiral[i][minCol])
    }
    minCol++;
  }

  console.log(result);
}



var testSpiral = [[1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]];

spiralTraversal(testSpiral);

// [1, 2, 3, 6, 9, 8, 7, 4, 5]
