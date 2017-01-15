$(window).on('load', function() {
    var $preloader = $(".page-bg");
    $preloader.delay(2000).fadeOut('slow');
	$('.none').css("display", "block");
	
	/*TYPEDJS*/
	
    $(function() {
        $(".user__info").typed({
            strings: ["<div><span class='bold'>Меня зовут :</span> Горденя Вадим Викторович</div><div><span class='bold'>Мой возраст :</span> 21 год</div><div><span class='bold'>Мой город :</span> Гродно, Беларусь</div><div><span class='bold'>Моя специальность :</span> FRONTEND разработчик</div><div><span class='bold key__skills'>Ключевые навыки :</span><div class='wrapp__skills'><span class='skills'>html</span><span class='skills'>CSS</span><span class='skills'>Bootstrap</span><span class='skills'>Sass</span><span class='skills'>javascript</span><br><span class='skills'>git</span><span class='skills'>gulp</span></div> "],
            typeSpeed: 30,
            startDelay: 2500
        });
    });
	$('.carousel').carousel();
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


