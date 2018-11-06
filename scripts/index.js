var fn_goHome = fn_goHome;
var fn_showFetchedData = fn_showFetchedData;

function activate () {
    fn_goHome();
    // document.addEventListener('DOMContentLoaded', function() {
        // code here
    //  }, false);
} // FN ACTIVATE

activate();

function fn_goHome () {
    gb_contentElem.innerHTML = gb_homeContent;
} // FN-GO-HOME

function fn_reload () {
    window.location.reload(true);
} // FN-RELOAD

function fn_showFetchedData () {
    var LINKS_OBJECT = db_data.linksList;

    if ( LINKS_OBJECT && LINKS_OBJECT instanceof Object && Object.keys(LINKS_OBJECT).length > 0 ) {
        var TMPL = "<a class='external_link padding-10 display-block hover-darken' title='Open link in new window' target='_blank' href='";
        var fetchedData = '';

        for ( var eachProperty in LINKS_OBJECT ) {
            if ( LINKS_OBJECT.hasOwnProperty(eachProperty) ) {
                fetchedData += TMPL + LINKS_OBJECT[eachProperty] + "'>" + eachProperty + '</a></br>';
            }
        } // FOR

        bindElements(fetchedData);
    } // IF ARRAY
} // FN-SHOW-FETCHED-DATA

function bindElements (fetchedData) {
    gb_contentElem.innerHTML = gb_resultContent;
    document.getElementById('divResults').innerHTML = "<div class='border-curved'>" + fetchedData + "</div>";
} // FN BIND-ELEMENTS



/*
* @returns {string}
*/
function getLinkName (linkStr) {
    linkStr = linkStr.split('/');
    return linkStr[ linkStr.length -1 ];
} // FN GET-LINK-NAME