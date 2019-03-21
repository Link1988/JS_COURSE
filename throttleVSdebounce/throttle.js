// as long as it continues to be invoked, raise on every interval
function throttle (func, interval) {
    var timeout;

    return function() {
        var context = this,
            args = arguments;

        var later = function () {
            timeout = false;
        };

        if (!timeout) {
            func.apply(context, args)
            timeout = true;
            setTimeout(later, interval)
        }
    }
}

var resizeHandler = function() {
    console.log('Done throttle resize');
};

window.addEventListener('resize', throttle(resizeHandler, 250));