var f1 = fetch('/something.json')
var f2 = fetch('/something2.json')

Promise.all([f1, f2])
    .then(function (response) {
        console.log('Array of results', response)
    })
    .catch(function (err) {
        console.error(err);
    });