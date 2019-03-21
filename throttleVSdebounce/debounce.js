function debounce (func, interval) {
    var timeout;

    return function () {
        var context = this,
            args = arguments;

        var later = function () {
            timeout = null;
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, interval || 200);
    }
}

var resizeHandler = function() {
    console.log('Done debounce resize');
};

window.addEventListener('resize', debounce(resizeHandler, 250));