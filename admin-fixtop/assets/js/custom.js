(function($){
	$(document).ready(function(){
		//page-login
		$('.help-block a').click(function(){
			$('#signin').slideUp(300)
			$('#signup').slideDown(300)
		});
		$('#signup button').click(function(){
			$('#signup').slideUp(300)
			$('#signin').slideDown(300)
		});

		$('.navbar-fixed-right a[href="#open"]').click(function(){
			var a = $(this).parents('.tabbable').find('.tab-content')
			
			if(a.hasClass('active')) {
                a.removeClass('active');
                a.find('.tab-pane').removeClass('active')
                $(this).parents('.nav-tabs').children().removeClass('active')
            } else {
                a.addClass('active');
            	a.find('.tab-pane:first').addClass('active')
            	$(this).parent().next().addClass('active')
            }
		});

		$('.navbar-fixed-right a[href^="#tab"]').click(function(){
			$(this).parents('.tabbable').find('.tab-content').addClass('active')
		});


		$('.list-menu-right').find('a').click(function(e){
            var li = $(this).parent();
            if(li.hasClass('active')) {
                li.removeClass('active');
            } else {
                li.siblings().removeClass('active');
                li.addClass('active');
            } 
        });

        $('.tip-top').tooltip({placement: 'top'});
        $('.tip-left').tooltip({placement: 'left'});
        $('.tip-right').tooltip({placement: 'right'});
        $('.tip-bottom').tooltip({placement: 'bottom'});

		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);