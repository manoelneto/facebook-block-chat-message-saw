

function injectScript(source) {
    var elem = document.createElement("script"); //Create a new script element
    elem.type = "text/javascript"; //It's javascript
    elem.innerHTML = source; //Assign the source
    document.documentElement.appendChild(elem); //Inject it into the DOM
}

injectScript("("+(function() {
    //Save the old function
    var proxied = window.XMLHttpRequest.prototype.open;
    //Overwrite with a new one
    window.XMLHttpRequest.prototype.open = function(method, path, async) {
    	if ( path === '/ajax/mercury/change_read_status.php' ) {
        	return true;
    	}
        return proxied.apply(this, [].slice.call(arguments)); //Call the old function
    };
}).toString()+")()");