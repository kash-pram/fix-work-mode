
var gb_contentElem = document.getElementById('divContent');

var MAX_LENGTH = 50;

var gb_homeContent = "<div class='padding-top-5-p'>\
                        <header class='text-center'>\
                            workmode.me\
                        </header>\
                      </div>\
                      <form class='text-center padding-top-5-p' id='magicForm'>\
                        <input class='padding-15 margin-5' id='inpMagicField' type='text' value='' placeholder='Enter the Magic Word' autocomplete='off' required/>\
                        <input id='inpGetBtn' class='internal-button' type='submit' value='Show' onclick='db_get()' /> \
                      </form>";
