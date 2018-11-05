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
    var LINKS_OBJECT = db_data.linksList;

    if ( LINKS_OBJECT && LINKS_OBJECT instanceof Object && Object.keys(LINKS_OBJECT).length > 0 ) {
        var TMPL = "<a class='external_link' target='_blank' href='";
        var fetchedData = '';

        for ( var eachProperty in LINKS_OBJECT ) {
            if ( LINKS_OBJECT.hasOwnProperty(eachProperty) ) {
                // fetchedData += TMPL + eachProperty + "'>" + getLinkName(db_data.links[i]) + '</a></br>';
                fetchedData += TMPL + LINKS_OBJECT[eachProperty] + "'>" + eachProperty + '</a></br>';
            }
        } // FOR

        bindElements(fetchedData);
    } // IF ARRAY
} // FN-SHOW-FETCHED-DATA

function bindElements (fetchedData) {
    gb_contentElem.innerHTML = gb_resultContent;
    document.getElementById('divResults').innerHTML = fetchedData;
} // FN BIND-ELEMENTS

/*
* @returns {string}
*/
function getLinkName (linkStr) {
    linkStr = linkStr.split('/');
    return linkStr[ linkStr.length -1 ];
} // FN GET-LINK-NAME