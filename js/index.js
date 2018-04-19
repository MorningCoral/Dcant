
$("#closebtn").click(function(){
	$("#fullpage-nav").fadeOut();
	
});

$("#openbtn").click(function(){
	("#fullpage-nav").fadeIn();
	("#fullpage-nav").animate({height: '100%', width: '100%'});
});
/* $("button").click(function(){
	var index = ($(this).text())
	var newhead = ($("#headerlist > p:nth-child(" + index + ")").text());
	$("#header>p").text(newhead);
	var newpage = $("#pagelist > .page:nth-child(" + index + ")").html();
	document.getElementById("main").innerHTML = newpage;
	
});
*/
// just some interesting CSS
// for tabbed content :)
// 
// inspired by: 
// https://www.google.com/intl/en-GB/chrome/devices/chromecast


$(".main").tabs({ 
  show: { effect: "blind", duration: 200} ,
  hide: { effect: "blind", duration: 200} 
});

$(".cat-tabs").tabs({ 
  show: { effect: "slide", direction: "left", duration: 150, easing: "easeOutQuad" } ,
  hide: { effect: "slide", direction: "right", duration: 150, easing: "easeInQuad" } 
});

$('.btm-nav button').click(function() {
    $('button').removeClass('active')
    $(this).addClass('active')
});

$('.cat-tabs li').click(function() {
    $('.cat-tabs li').removeClass('active')
    $(this).addClass('active')
});