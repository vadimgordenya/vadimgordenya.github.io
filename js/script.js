$(window).on('load', function() {
    var $preloader = $(".page-bg");
    $preloader.delay(2000).fadeOut('slow');
}); 
$(document).ready(function(){
   var url=document.location.href;
          $.each($(".menu__link li a"),function(){
    if(this.href==url){$(this).addClass('link__active').css("color","#fff");};
   });
    $(".menu-trigger").click(function() {
		$(".menu ul").slideToggle(500);
	});
	 $(window).resize(function() {		
		if ( $(window).width() > 680 ) {			
			$('.menu ul').removeAttr('style');
		 }
	});      
});


