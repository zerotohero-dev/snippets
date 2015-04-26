// TODO: this should be generated with a generator script by combining code in different modules.
// There should be several output formats:
// 1. amd
// 2. commonjs
// 3. es6 modules
// 4. namespaces

function id(x) {return document.getElementById(x);}
function encode(x) {return encodeURIComponent(x);}
    
function defer(fn) {
    var timer = null;

    return function() {
        clearTimeout(timer);

        timer = setTimeout(fn, 400);
    }
}
