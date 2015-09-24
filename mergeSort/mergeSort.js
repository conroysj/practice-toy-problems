// mergeSort sorts an array using the divide and
// conquer strategy.



var mergeSort = function(arr){
  // if arr is greater than 1, split into two arrays
  if (arr.length > 1){
    arr1 = arr.slice(0, arr.length/2);
    arr2 = arr.slice(arr.length/2, arr.length);
    return merge(mergeSort(arr1), mergeSort(arr2));
  } else {
    // is length 1
    return arr;
  }

};

var merge = function(left, right){
  var i = 0, j = 0, result = [];
  while (i < left.length && j < right.length){
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  var remaining = i === left.length ? right.slice(j) : left.slice(i);
  return result.concat(remaining);
};
