
(function($){
		
	$(document).ready(function(){

		$('input.box-text').bind('focus blur', function(){
			$(this).toggleClass('focus');
		});

		$('.overlay').hover(function(){

			$(this).children().show();
			$(this).next().css({'opacity': 0.1});
		},function(){
			$(this).children().hide();
			$(this).next().css({'opacity': 1});
		});

	});


})(jQuery);
