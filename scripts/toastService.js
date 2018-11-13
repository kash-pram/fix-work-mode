var showToast = showToast;
var hideToast = hideToast;
var hideLoading = hideLoading;
var showLoading = showLoading;

var toastElem = document.getElementById("divToast");

// TO DO: WRITE INPUT AND RETURNS FOR EVERY FUNCTION
/*
* @input {}
*/
function showToast (toastMsg, inpTime) {
    if ( toastMsg ) {
        document.getElementById("divDesc").innerText = toastMsg;
        toastElem.className = "show";

        if (inpTime) {
            setTimeout(hideToast, inpTime);
        }
    }
} // FN SHOW-TOAST

function hideToast () {
    toastElem.className = toastElem.className.replace("show", "");
} // FN HIDE-TOAST

function hideLoading () {
    document.getElementById('divLoading').className = 'none';
} // FN-HIDE-LOADING

function showLoading () {
    document.getElementById('divLoading').className = 'display';
} // FN-SHOW-LOADING
