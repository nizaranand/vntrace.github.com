(function($){
	$(document).ready(function(){
		// $('.nav-list').find('li').click(function(){
		// 	$('.nav-list').find('li').removeClass('active')
		// 	$(this).addClass('active');
		// });
		// $('.nav-list').toggle(function(){
		// 	$(this).next().show();
		// 	$(this).find('.icon-circle-arrow-right')
		// 	.removeClass('icon-circle-arrow-right').addClass('icon-circle-arrow-down')
		// },function(){
		// 	$(this).next().hide();
		// 	$(this).find('.icon-circle-arrow-down')
		// 	.removeClass('icon-circle-arrow-down').addClass('icon-circle-arrow-right')
		// });
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
            e.stopPropagation();
		});

        $('.list-menu').find('a').click(function(e){
            // e.preventDefault();
            var li = $(this).parent();
            if(li.hasClass('active')) {
                li.removeClass('active');
            } else {
                li.siblings().removeClass('active');
                li.addClass('active');
            }   

        });
	});
})(jQuery);