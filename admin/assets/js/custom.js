(function($){
	$(document).ready(function(){

        // remove this when your website in production. 
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
            e.stopPropagation();
		});


        $('.list-menu').find('a').click(function(e){
            var li = $(this).parent();
            if(li.hasClass('active')) {
                li.removeClass('active');
                $(this).children('i').removeClass('icon-white');
            } else {
                li.siblings().removeClass('active');
                li.siblings().find('i').removeClass('icon-white');
                li.addClass('active');
                $(this).children('i').addClass('icon-white');
            }   
        });
        // $('[data-change-color=change-color] a').click(function(e){
        //     var color = $(this).attr('data');
        //     var remo = $('.plan-business a').attr('class');
        //     $('.plan-business a').removeClass(remo);
        //     $('.plan-business a').addClass(color);
        // });
	});
})(jQuery);