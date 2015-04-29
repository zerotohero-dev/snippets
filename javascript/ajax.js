function get(url, callback) {
    if (!window.XMLHttpRequest)  {return;}

    var xhr = new XMLHttpRequest(),
        READY = 4,
        SUCCESS = 200;

    xmlhttp.onreadystatechange = function(){
        if (xhr.readyState === READY && xhr.status === SUCCESS) {
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);

    xhr.send('');
}
