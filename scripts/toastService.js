var showToast = showToast;
var hideToast = hideToast;

function showToast (inpText, inpTime) {
    var x = document.getElementById("toast");
    document.getElementById("divDesc").innerText = inpText;
    x.className = "show";

    if (inpTime) {
        setTimeout(hideToast, 3000);
    }
} // FN SHOW-TOAST

function hideToast () {
    var x = document.getElementById("toast")
    x.className = x.className.replace("show", ""); 
} // FN HIDE-TOAST