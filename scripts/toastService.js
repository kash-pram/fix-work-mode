var showToast = showToast;
var hideToast = hideToast;

var toastElem = document.getElementById("divToast");

function showToast (inpText, inpTime) {
    document.getElementById("divDesc").innerText = inpText;
    toastElem.className = "show";

    if (inpTime) {
        setTimeout(hideToast, 3000);
    }
} // FN SHOW-TOAST

function hideToast () {
    toastElem.className = toastElem.className.replace("show", "");
} // FN HIDE-TOAST