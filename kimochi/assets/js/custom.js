(function($){
	$(document).ready(function(){
		$('.i-resize-full').toggle(function(){
			$(this).addClass('active')
			$(this).parents('.box-show').removeClass('offset1 span10').addClass('span12')
		},function(){
			$(this).removeClass('active')
			$(this).parents('.box-show').removeClass('span12').addClass('offset1 span10')
		});
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);