
"use strict";

(function(){
  var resetTogglables = function(){
    Array.prototype.forEach.call(document.getElementsByClassName("togglable"), function(e,i,a){
      e.className = e.className.replace(" -showing", "");
    });
    Array.prototype.forEach.call(document.getElementsByClassName("toggleButton"), function(e,i,a){
      e.className = e.className.replace(" -showing", "");
    });

  };

  Array.prototype.forEach.call(document.getElementsByClassName("toggleButton"), function(el,i,a){
    el.onclick = function(ev){
      var toggleId = el.getAttribute("data-name");

      resetTogglables();
      document.getElementById(toggleId).className += " -showing";
      el.className += " -showing";

      ev.preventDefault();
    }
  });

  resetTogglables();

})();
