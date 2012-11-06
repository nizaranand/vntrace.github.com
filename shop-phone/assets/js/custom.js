(function($){
	$(document).ready(function(){
		$('a[data-submenu="submenu"]').hover(function(){
			$(this).next().css({'display':'block'})
		},function(){
			$(this).next().css({'display':'none'})
		});

		$('.nav-submenu').hover(function(){
			$(this).css({'display':'block'})
		},function(){
			$(this).css({'display':'none'})
		});
		//navbar-search
		$('a.search').toggle(function(){
			$('.navbar-search').slideDown(100)
		},function(){
			$('.navbar-search').slideUp(100)
		});

		//
		$('a.search').click(function(e){
			var a = $(this).parents('.navbar-search')
			
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

		//new-account
		$('.new-account').click(function(){
			$('.register').slideDown()
		});
		// tooltip
        $('.tip-top').tooltip({placement: 'top'});
        $('.tip-left').tooltip({placement: 'left'});
        $('.tip-right').tooltip({placement: 'right'});
        $('.tip-bottom').tooltip({placement: 'bottom'});

        // goto top
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