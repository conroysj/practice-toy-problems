var asyncMap = function(tasks, callback) {
  var resultsArray = [];
  var resultsCount = 0;
  for (var i = 0; i < tasks.length; i++){
    // use an immediately-invoked function expression (iife) to create a context under which i is bound to the context of the following function call
    (function(i){
      // pass a cb function to each task that stores the task's result value, when available, at resultsArray index i
      tasks[i](function (val){
        resultsArray[i] = val;
        resultsCount++;
        // call the callback once each async function has returned (and therefore populated the resultsArray)
        if (resultsCount === tasks.length) {
            callback(resultsArray);
        }
      });
      // var i is passed to the iife
    })(i)
  }
}

// test code

var task1 = function(cb){
  setTimeout(function(){
    var x = 'one';
    cb(x);
  }, 2000);
};

var task2 = function(cb){
  setTimeout(function(){
    var x = 'two';
    cb(x);
  }, 1000);
};

var print = function(val){
  console.log(val);
};

asyncMap([task1, task2], print);
// ['one', 'two']

