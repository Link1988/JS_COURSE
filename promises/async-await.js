/** Callback hell **/

function foo(){
    fetch('https://restcountries.eu/rest/v2/name/mexico')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
}
foo();

/** Async await **/

const bar = async () => {
    let response = await fetch('https://restcountries.eu/rest/v2/name/mexico');
    let data = await response.json();
    console.log(data);
}
bar();
