(function($){
	$(document).ready(function(){
		//page-login
		$('.help-block a').click(function(){
			$('#signin').slideUp(400)
			$('#signup').slideDown(400)
		});
		$('#signup button').click(function(){
			$('#signup').slideUp(400)
			$('#signin').slideDown(400)
		});
		// end page-login


		// navbar-fixed-right
		$('.navbar-fixed-right a[href="#open"]').click(function(e){
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
		// end navbar-fixed-right


		// list-menu-right
		$('ul[rel=submenu]').find('a').click(function(e){
            var li = $(this).parent();
            if(li.hasClass('active')) {
                li.removeClass('active');
            } else {
                li.siblings().removeClass('active');
                li.addClass('active');
            } 
        });
		// end list-menu-right


		// tooltip
        $('.tip-top').tooltip({placement: 'top'});
        $('.tip-left').tooltip({placement: 'left'});
        $('.tip-right').tooltip({placement: 'right'});
        $('.tip-bottom').tooltip({placement: 'bottom'});

		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
		// end tooltip
	});
})(jQuery);