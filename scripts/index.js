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
    if ( db_data.links && db_data.links instanceof Array && db_data.links.length > 0 ) {
        var tmpl = "<a class='external_link' target='_blank' href='";
        var fetchedData = '';
        for ( var i=0; i < db_data.links.length; i++ ) {
            fetchedData += tmpl + db_data.links[i] + "'>" + getLinkName(db_data.links[i]) + '</a></br>';
        } // FOR
        gb_contentElem.innerHTML = fetchedData;
    } // IF ARRAY
} // FN-SHOW-FETCHED-DATA

/*
* @returns {string}
*/
function getLinkName (linkStr) {
    linkStr = linkStr.split('/');
    return linkStr[ linkStr.length -1 ];
} // FN GET-LINK-NAME