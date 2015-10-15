var compose = function() {

  // Make a copy of the arguments pseudo-array (list of functions) as an Array
  var args = Array.prototype.slice.call(arguments);

  // Create a function that will have access to the list of functions via closure and that will accept one argument-param
  return function(arg) {

    // Iterate along the list of functions (R-L) and call each one on the arg, updating the arg's value each time
    for (var i = args.length-1; i >= 0; i--) {
      arg = args[i].call(this, arg);
    }

    // Return the arg when finished
    return arg;
  }
}
