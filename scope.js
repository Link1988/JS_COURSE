// Global variable
var scope = 'global';

function checkscope() {
    // Declare a local variable with the same name
    var scope = 'local';
    return scope;
}

checkscope();

// Second sample
scope = 'global';

function checkscope2() {
    scope = 'local';
    myscope = 'local';
    return [scope, myscope];
}

checkscope2();
console.log(scope);
console.log(myscope);

// Third sample
var scope = 'global scope';

function checkscope3() {
    var scope = 'local scope';

    function nested() {
        var scope = 'nested scope';
        return scope;
    }

    return nested();
}

checkscope3();