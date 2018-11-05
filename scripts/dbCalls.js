var db_fireObj = firebase.firestore();
var db_get = db_get;
var db_data = "";

db_fireObj.settings({
    timestampsInSnapshots: true
});

/*
* @returns {none}
*/
function db_get () {  
    if ( validate_inputs() ) {
// TO DO: TRIM THE FIRST AND LAST TRAILING WHITE SPACES
        document.getElementById('cover-spin').className = 'display';
// TO DO: ADD ANIMATION CSS FOR SHOW AND HIDE
        db_fireObj.collection(dataListener.value).get().then(querySnapshot => {
// TO DO: CLEAR THE FIELDS AFTER POST
// TO DO: MAKE BROWSER NOT REMEMBER THE LAST ENTERED TEXTS

// TO DO: BACK-END TO RESTRICT ONLY 100 REQUESTS PER DAY FROM A USER TOKEN
            querySnapshot.forEach((doc) => {
                db_data = doc.data();
            }); // FOR-EACH
            fn_showFetchedData();
            document.getElementById('cover-spin').className = 'none';
        }).catch(function(error) {
            console.error("Error reading document: ", error);
            showToast("Error reading document!", 3000);
            document.getElementById('cover-spin').className = 'none';
        });
    } else {
        console.log('Invalid input ', dataListener.value);
    }
    return false;
} // FN DB_GET