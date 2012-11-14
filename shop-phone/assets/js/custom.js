// asyn google webfont loader
(function() {
    WebFontConfig = {
        google: { families: [ 'Anaheim', 'Audiowide' ] },
    };

    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

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

		// tooltip
        $('.tip-top').tooltip({placement: 'top'});
        $('.tip-left').tooltip({placement: 'left'});
        $('.tip-right').tooltip({placement: 'right'});
        $('.tip-bottom').tooltip({placement: 'bottom'});

        // goto top
        $('.gotop').click(function(){
            $("body, html").animate({
                scrollTop: "0px"
            });
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > 150) {
                $('.gotop').fadeIn();
                $('.title').slideUp('fast');
            } else {
                $('.gotop').fadeOut();
                $('.title').slideDown('fast');
            }
        });
        // product-img data="slide"
        $('.product-img[data="slide"] a[class^="ic"]').hide()
        $('.product-img[data="slide"]').hover(function(){
            $('.product-img[data="slide"] a[class^="ic"]').show()
        },function(){
            $('.product-img[data="slide"] a[class^="ic"]').hide()
        });
        //reply form chat
        $('.reply').click(function(e){
            // $(this).parents('.box-comment').find('.comment-post').hide()
            // var a = $('.reply').parent()
            // $(this).removeClass('reply')
        	$('.comment-post').appendTo(this)
        })

		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);