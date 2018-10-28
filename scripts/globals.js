
var gb_contentElem = document.getElementById('divContent');

var MAX_LENGTH = 50;

var gb_homeContent = "<div class='padding-top-10-p'>\
                        <header class='text-center'>\
                            <span class='internal-link' onclick='fn_showDashboard()'>Go to Dashboard >> </span>\
                        </header>\
                      </div>\
                      <form class='text-center padding-top-10-p' id='mainForm'>\
                        <input class='padding-15 margin-5 input-box' id='inpDataField' type='text' value='' placeholder='Data' required/>\
                        <input class='padding-15 margin-5 input-box' id='inpCateField' type='text' value='' placeholder='Category [, sub-category]' required/>\
                        <input class='padding-15 margin-5 input-box' id='inpHintField' type='text' value='' placeholder='Hint'/>\
                        <br>\
                        <br>\
                        <br>\
                        <input id='inpSaveBtn' class='internal-button' type='submit' value='Save' onclick='db_save()' /> \
                      </form>";

var gb_dashboardContent = "<div class='padding-top-10-p'>\
                            <header class='text-center'>\
                                <span class='internal-link' onclick='fn_goHome()'> << Go Home</span>\
                            </header>\
                           </div>";