
var gb_contentElem = document.getElementById('divContent');

var MAX_LENGTH = 50;

var gb_homeContent = "<div class='padding-top-10-p'>\
                        <header class='text-center'>\
                            Welcome to MagicBox!\
                        </header>\
                      </div>\
                      <form class='text-center padding-top-10-p' id='magicForm'>\
                        <input class='padding-15 margin-5 input-box' id='inpMagicField' type='text' value='' placeholder='Enter the Magic Word' required/>\
                        <input id='inpGetBtn' class='internal-button' type='submit' value='Get' onclick='db_get()' /> \
                      </form>";

// var gb_dashboardContent = "<div class='padding-top-10-p'>\
//                             <header class='text-center'>\
//                                 <span class='internal-link' onclick='fn_goHome()'> << Go Home</span>\
//                             </header>\
//                            </div>";