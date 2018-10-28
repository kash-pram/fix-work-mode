var validate_inputs = validate_inputs;

/*
* @returns {boolean}
*/
function validate_inputs () {
    var checkFlag = false;
    checkFlag = checkEmpty(dataListener.value) && checkLength(dataListener.value);
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