var dataListener = document.getElementById('inpDataField');
var cateListener = document.getElementById('inpCateField');
var hintListener = document.getElementById('inpHintField');

// TO DO: LISTENERS TO NOT ALLOW COMMA ON DATALISTENER AND HINTLISTENER
// TO DO: LISTENER TO ALLOW ONLY ONE COMMA FOR CATELISTENER

var formListener = document.getElementById('mainForm');
formListener.addEventListener('submit', function (evt) {
    evt.preventDefault();
});
