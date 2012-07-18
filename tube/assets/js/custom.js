
(function($){
		
	$(document).ready(function(){

		$('input.box-text').bind('focus blur', function(){
			$(this).toggleClass('focus');
		});

		$('.thumbnail').hover(function(){

			$(this).find('.overlay span').show();
			$(this).find('img').css({'opacity': 0.1});
		},function(){
			$(this).find('.overlay span').hide();
			$(this).find('img').css({'opacity': 1});
		});

	});


})(jQuery);
