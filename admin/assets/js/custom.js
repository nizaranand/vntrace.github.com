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
	});
})(jQuery);