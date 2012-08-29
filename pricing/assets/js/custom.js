(function($){
	$(document).ready(function(){
        
		$('.change-color').children().click(function(){
			$(this).siblings().removeClass('active')
			$(this).addClass('active')
		});
		$('.change-color .btn-success').click(function(){
			$(this).parents('.plan-container').removeClass('red blue orange')
			$(this).parents('.plan-container').addClass('green')
		});
		$('.change-color .btn-danger').click(function(){
			$(this).parents('.plan-container').removeClass('green blue orange')
			$(this).parents('.plan-container').addClass('red')
		});
		$('.change-color .btn-info').click(function(){
			$(this).parents('.plan-container').removeClass('green red orange')
			$(this).parents('.plan-container').addClass('blue')
		});
		$('.change-color .btn-warning').click(function(){
			$(this).parents('.plan-container').removeClass('green red blue')
			$(this).parents('.plan-container').addClass('orange')
		});
		$(window).scroll(function () { 
	      $('.gotop').show()
	    });

		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);

