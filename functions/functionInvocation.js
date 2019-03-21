// When a function is invoked with this pattern, this is bound to the global object.
var add = function add (a, b) {
    return a + b;
}

var sum = add(3, 4);