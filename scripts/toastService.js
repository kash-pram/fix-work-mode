var showToast = showToast;
var hideToast = hideToast;

function showToast () {
    var x = document.getElementById("toast")
    x.className = "show";
}

function hideToast () {
    var x = document.getElementById("toast")
    x.className = x.className.replace("show", ""); 
}