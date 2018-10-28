var db_fireObj = firebase.firestore();
var db_save = db_save;
var db_fetch = db_fetch;

db_fireObj.settings({
    timestampsInSnapshots: true
});

/*
* @returns {none}
*/
function db_save () {  
    if ( validate_inputs() ) {
    // if ( true ) {
        var tmpArray = cateListener.value;
        tmpArray = tmpArray.split(",");
        showToast();
// TO DO: TRIM THE FIRST AND LAST TRAILING WHITE SPACES

        db_fireObj.collection('entries').add({
            data: dataListener.value,
            category: tmpArray[0],
            hint: hintListener.value,
            subCategory: (tmpArray.length > 1) ? tmpArray[1] : ""
        // db_fireObj.collection('entries').add({
        //     data: "Prakash",
        //     category: "Perumal Mariappan",
        //     hint: "TEST 13456",
        //     subCategory: ""
        }).then(function(docRef) {
// TO DO: CLEAR THE FIELDS AFTER POST
// TO DO: MAKE BROWSER NOT REMEMBER THE LAST ENTERED TEXTS

// TO DO: BACK-END TO RESTRICT ONLY 100 REQUESTS PER DAY FROM A USER TOKEN
            console.log("Document written with ID: ", docRef.id, ' @', Date.now());
            hideToast();
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });
    } else {
        // TO DO: SHOW TOAST ERROR MSG
        console.log("INVALID INPUTS FLAG");
    }
    return false;
} // FN DB_SAVE

/*
* @returns {boolean}
*/
function db_fetch () {
    db_fireObj.collection('entries').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
console.log(`${doc.id} => ${doc.data()}`);
            // var contentElem = document.getElementById('divContent');
// TO DO: LOADING.HIDE
        }); // FOR-EACH
        gb_contentElem.innerHTML = gb_dashboardContent;
        gb_contentElem.innerHTML += "FETCHED DATA";
    });
} // FN DB_FETCH