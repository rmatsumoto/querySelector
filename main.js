/**
 * Selecting all elements with CSS descendant selector string
 * array without using querySelectorAll
 */
var cssquery = window.cssquery = function(s) {
  
    var el = "";
    var returnArray = [];
    var IDArray = [];
    var i = 0;

    while(el != null) {

        if (i != 0) {
            var ii = IDArray.length;
            var notSelector = "";

            for (var count = 0; count <  ii; count++) {
                notSelector += (":not(#" + IDArray[count] + ")");
            }

            el = document.querySelector(s + notSelector);
            if (el != null) {
                IDArray.push(el.id);
            }
        }
        else {
            el = document.querySelector(s);
            if (el != null) {
                IDArray.push(el.id);
            }
        }

        if (el != null) {
            returnArray.push(el);
        }
        
        i++;
    }

    return returnArray;    
};