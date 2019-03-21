var done = true

var isItDoneYet = new Promise(function (resolve, reject) {
    if (done) {
    var workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    var why = 'Still working on something else'
    reject(why);
  }
});