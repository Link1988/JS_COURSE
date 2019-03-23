// transform the es5 tree into an es6 tree
function builder(n) {
    return [...Array(n)].map((_, i) => `${" ".repeat(n - i - 1)}${"*".repeat((i * 2)+ 1)}${" ".repeat(n - i - 1)}`);
 }