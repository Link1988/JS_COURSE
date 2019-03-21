new Promise(function(resolve) {

    setTimeout(function() {
        return resolve(1);
    }, 1000);

  }).then(function(result) {

    alert(result); // 1
    return result * 2;

  }).then(function(result) {

    alert(result); // 2
    return result * 2;

  }).then(function(result) {

    alert(result); // 4
    return result * 2;

  });