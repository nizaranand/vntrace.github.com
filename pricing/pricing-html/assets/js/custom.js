(function($){
	$(document).ready(function(){
        
		$('.change-color button[class*=btn-]').click(function(){
			$(this).siblings('button[class*=btn-]').removeClass('active')
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

		$('.change-color .plan-fluid').toggle(function(){
			$(this).addClass('active')
			$(this).parents('.plan-container').addClass('plan-fluid')
		},function(){
			$(this).parents('.plan-container').removeClass('plan-fluid')
			$(this).removeClass('active')
		});

        $('.gotop').click(function(){
            $("body, html").animate({
                scrollTop: "0px"
            });
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $('.gotop').fadeIn();
            } else {
                $('.gotop').fadeOut();
            }
        });

		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);

