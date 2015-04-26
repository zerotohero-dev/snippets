function defer(fn) {
    var timer = null;

    return function() {
        clearTimeout(timer);

        timer = setTimeout(fn, 400);
    }
}

// TODO: add some variations; like on utilizes RAF etc.
