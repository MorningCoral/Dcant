$(document).ready(function(){
    $('ul.tabs').tabs({
      swipeable : true,
      responsiveThreshold : 1920
    });
  });
function openfullNav() {
    document.getElementById("fullpage-nav").style.height = "100%";
}

function closefullNav() {
    document.getElementById("fullpage-nav").style.height = "0%";
}