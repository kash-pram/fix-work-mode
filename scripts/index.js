var fn_goHome = fn_goHome;
var fn_showFetchedData = fn_showFetchedData;

function activate () {
    fn_goHome();
} // FN ACTIVATE

activate();

function fn_goHome () {
    gb_contentElem.innerHTML = gb_homeContent;
} // FN-GO-HOME

function fn_showFetchedData () {
    // db_data && db_data !== '' &&
    if ( db_data.linkObjects && db_data.linkObjects instanceof Object && Object.keys(db_data.linkObjects) > 0 ) {
        var TMPL = "<a class='external_link' target='_blank' href='";
        var fetchedData = '';
        for ( var i=0; i < Object.keys(db_data.linkObjects); i++ ) {
            fetchedData += TMPL + db_data.links[i] + "'>" + getLinkName(db_data.links[i]) + '</a></br>';
        } // FOR

        bindElements(fetchedData);
    } // IF ARRAY
} // FN-SHOW-FETCHED-DATA

function bindElements (fetchedData) {
    gb_contentElem.innerHTML = gb_resultContent;
    // document.getElementById('divResults').appendChild(fetchedData);
    document.getElementById('divResults').innerHTML(fetchedData);
} // FN BIND-ELEMENTS

/*
* @returns {string}
*/
function getLinkName (linkStr) {
    linkStr = linkStr.split('/');
    return linkStr[ linkStr.length -1 ];
} // FN GET-LINK-NAME