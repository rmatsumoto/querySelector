/**
 * Selecting all elements with CSS descendant selector string
 * array without using querySelectorAll
 */
var cssquery = window.cssquery = function(s) {
  
    var el = "";
    var returnArray = [];
    var i = 0;

    while(el != null) {

        if (i != 0) {
            
            var notSelector = "";

            for (var count = 0; count <=  i; count++) {
                notSelector += (":not([data-selected-" + (count + 1) + "='true'])");
            }
            
            el = document.querySelector(s + notSelector);
            
            if (el != null) {
                el.setAttribute("data-selected-" + i, "true");
            }
        }
        else {
            el = document.querySelector(s);
            if (el != null) {
                el.setAttribute("data-selected-1", "true");
            }
        }

        if (el != null) {
            returnArray.push(el);
        }
        
        i++;
    }
    
    returnArray.sort(function(a, b) {
        
        if (a.id < b.id) 
            return -1;
        
        if (a.id > b.id ) 
            return 1;
        
        return 0;
    });
    return returnArray;    
};

