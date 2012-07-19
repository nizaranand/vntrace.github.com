
(function($){
		
	$(document).ready(function(){

		$('input.box-text').bind('focus blur', function(){
			$(this).toggleClass('focus');
		});

		$('.overlay').hover(function(){

			$(this).children().show();
			$(this).parent().find('img').css({'opacity': 0.1});
		},function(){
			$(this).children().hide();
			$(this).parent().find('img').css({'opacity': 1});
		});

	});


})(jQuery);
