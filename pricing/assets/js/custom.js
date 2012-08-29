(function($){
	$(document).ready(function(){
        
		$('.change-color').children().click(function(){
			$(this).siblings().removeClass('active')
			$(this).addClass('active')
		});
		//change color plan
		$('.btn-success').click(function(){
			$(this).parents('.plan-container').removeClass('red blue orange')
			$(this).parents('.plan-container').addClass('green')
		});
		$('.btn-danger').click(function(){
			$(this).parents('.plan-container').removeClass('green blue orange')
			$(this).parents('.plan-container').addClass('red')
		});
		$('.btn-info').click(function(){
			$(this).parents('.plan-container').removeClass('green red orange')
			$(this).parents('.plan-container').addClass('blue')
		});
		$('.btn-warning').click(function(){
			$(this).parents('.plan-container').removeClass('green red blue')
			$(this).parents('.plan-container').addClass('orange')
		});
		//change style plan
		$('.change-style button[id^=plan-]').click(function(){
			$(this).siblings('button[id^=plan-]').removeClass('active')
			$(this).addClass('active')
		});
		
		$('.change-style #plan-old-man').click(function(){
			$(this).parents('.plan-container').removeClass('plan-easy plan-cool')
			$(this).parents('.plan-container').addClass('plan-old-man')
		});
		$('.change-style #plan-easy').click(function(){
			$(this).parents('.plan-container').removeClass('plan-cool plan-old-man')
			$(this).parents('.plan-container').addClass('plan-easy')
		});
		$('.change-style #plan-cool').click(function(){
			$(this).parents('.plan-container').removeClass('plan-old-man plan-easy')
			$(this).parents('.plan-container').addClass('plan-cool')
		});
		$('.change-style .plan-fluid').toggle(function(){
			$(this).addClass('active')
			$(this).parents('.plan-container').addClass('plan-fluid')
		},function(){
			$(this).parents('.plan-container').removeClass('plan-fluid')
			$(this).removeClass('active')
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

