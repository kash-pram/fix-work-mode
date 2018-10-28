var fn_goHome = fn_goHome;
// var fn_showDashboard = fn_showDashboard;

function activate () {
    fn_goHome();
} // FN ACTIVATE

activate();

function fn_goHome () {
    gb_contentElem.innerHTML = gb_homeContent;
} // FN-GO-HOME

// function fn_showDashboard () {
// // TO DO: LOADING.SHOW
//     db_fetch();
//     // db_fetch().then(function(){
//     //     gb_contentElem.innerHTML = gb_dashboardContent;
//     //     gb_contentElem.innerHTML += "FETCHED DATA";
//     // });
//     gb_contentElem.innerHTML = "Fetching data...";
// } // FN-SHOW-DASHBOARD