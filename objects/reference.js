// Reference
var stooge = {
    nickname: 'Alex'
};

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
// nick is 'Curly' because x and stooge
// are references to the same object

// a, b, and c each refer to a
// different empty object
var a = {},
    b = {},
    c = {};

// a, b, and c all refer to
// the same empty object
a = b = c = {};