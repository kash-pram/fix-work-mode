var validate_inputs = validate_inputs;

/*
* @returns {boolean}
*/
function validate_inputs () {
    var checkFlag = false;
    if ( navigator.onLine ) {
        checkFlag = checkEmpty(dataListener.value) && checkLength(dataListener.value);
    } else {
        showToast("Kindly check your internet connection.", 3000);
    }
    return checkFlag;
} // FN VAL-INPUTS

/*
* @returns {boolean}
*/
function checkEmpty ( inpValue ) {
    return ( inpValue !== '' );
} // FN IF-EMPTY

/*
* @returns {boolean}
*/
function checkLength ( inpValue ) {
    return (inpValue.length < MAX_LENGTH);
} // FN CHECK-LENGTH