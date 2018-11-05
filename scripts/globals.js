
var gb_contentElem = document.getElementById('divContent');

var MAX_LENGTH = 50;
var PAGE_TITLE = "workmode.me";

var gb_pageHeader = "<div class='padding-top-5-p'>\
                      <header class='text-center pointer-cursor' onclick='fn_goHome()'>" + PAGE_TITLE + "</header>\
                     </div>";

var gb_homeContent =  gb_pageHeader + "<form class='text-center padding-top-5-p' id='magicForm'>\
                        <input class='padding-15 margin-5' id='inpMagicField' type='text' value='' placeholder='Enter the Magic Words' autocomplete='off' required autofocus/>\
                        <input id='inpGetBtn' class='internal-button' type='submit' value='Show' onclick='db_get()' /> \
                        <br/><br/><br/>(or else) \
                        <br/><br/><br/>Sign-in to view all that is shared with you \
                      </form>";

  var gb_resultContent = gb_pageHeader + "<div id='divResults' class='padding-top-5-p'></div>";
