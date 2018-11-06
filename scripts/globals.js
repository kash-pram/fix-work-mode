
var gb_contentElem = document.getElementById('divContent');

var MAX_LENGTH = 50;
var PAGE_TITLE = "workmode.me";
var magicWord = "";
var db_data = "";

var gb_pageHeader = "<div class='margin-top-5-p'>\
                      <header class='pointer-cursor' onclick='fn_reload()'>" + PAGE_TITLE + "</header>\
                     </div>";

var gb_homeContent =  gb_pageHeader + "<form class='padding-top-5-p' id='magicForm'>\
                        <input class='padding-15 margin-5' id='inpMagicField' type='text' value='' placeholder='Enter the Magic Words' autocomplete='off' required autofocus/>\
                        <input id='inpGetBtn' class='internal-button' type='submit' value='Show' onclick='db_get()' /> \
                        <br/><br/><br/>(or else) \
                        <br/><br/><br/>Sign-in to view all that is shared with you \
                      </form>";

  var gb_resultContent = gb_pageHeader + "<div id='divResults' class='padding-top-5-p text-center'></div>";
