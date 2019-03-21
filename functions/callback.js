function doHomework(subject, callback) {
    console.log('Starting ' + subject +  ' my homework');
    callback();
}

doHomework('math', function () {
    console.log('Finished my homework');
});