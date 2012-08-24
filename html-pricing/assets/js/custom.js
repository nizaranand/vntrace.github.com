(function($){
	$(document).ready(function(){
		$('.change-color').children().click(function(){
			$(this).siblings().removeClass('active')
			$(this).addClass('active')
		});
		$('.change-color .btn-success').click(function(){
			$(this).parents('.pricing-plans').removeClass('red blue orange')
			$(this).parents('.pricing-plans').addClass('green')
		});
		$('.change-color .btn-danger').click(function(){
			$(this).parents('.pricing-plans').removeClass('green blue orange')
			$(this).parents('.pricing-plans').addClass('red')
		});
		$('.change-color .btn-info').click(function(){
			$(this).parents('.pricing-plans').removeClass('green red orange')
			$(this).parents('.pricing-plans').addClass('blue')
		});
		$('.change-color .btn-warning').click(function(){
			$(this).parents('.pricing-plans').removeClass('green red blue')
			$(this).parents('.pricing-plans').addClass('orange')
		});

		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);