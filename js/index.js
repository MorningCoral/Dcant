
$(".corner").click(function(){
	$('.opened')
		.animate({height: "7.8vh", width: "7.8vh", opacity: "0.9", borderTopRightRadius: "100%"}, 500);
	
	$('.closed')
		.animate({height: "100%", width: "100%", opacity: "1"}, {queue: false, duration: 500})
		.animate({borderTopRightRadius: "0%"}, {queue: false, duration: 800});
		
	$('.opened').switchClass("opened", "closed")
	$('.closed').switchClass("closed", "opened")
});





$(".main").tabs({ 
  show: { effect: "blind", duration: 200} ,
  hide: { effect: "blind", duration: 200} 
});

$('.btm-nav button').click(function() {
    $('button').removeClass('active')
    $(this).addClass('active')
});

$(".cat-tabs").tabs({ 
  show: { effect: "slide", direction: "left", duration: 150, easing: "easeOutQuad" } ,
  hide: { effect: "slide", direction: "right", duration: 150, easing: "easeInQuad" } 
});
$('.cat-tabs li').click(function() {
    $('.cat-tabs li').removeClass('active')
    $(this).addClass('active')
});
