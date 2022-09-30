function docReady(fn) {
    var divs = document.getElementsByTagName("div");

    for(var i = 0; i < divs.length; i++) {
        if (!divs[i].querySelector("div") && divs[i].querySelector("span")) continue;
        divs[i].onmouseover = function() {
            this.style.backgroundColor = "#ff000066";
        }
        divs[i].onmouseout = function() {
            this.style.backgroundColor = "#fff"; 
        }
    }
}

document.addEventListener('DOMContentLoaded', docReady, false);
