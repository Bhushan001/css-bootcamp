function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

var addFirst = makeAdder(5);
var addSecond = makeAdder(10);


console.log(addFirst(2)); 
console.log(addSecond(2));