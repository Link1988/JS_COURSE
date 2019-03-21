// Sample 1
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

// Sample 2
var patient = function (status) {
    return {
        getStatus: function () {
            return status;
        }
    };
};

var Patient = patient('good');
console.log(Patiend.getStatus());