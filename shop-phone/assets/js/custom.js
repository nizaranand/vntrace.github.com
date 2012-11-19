(function($){
	$(document).ready(function(){
        // asyn google webfont loader
         WebFontConfig = {
            google: { families: [ 'Anaheim', 'Audiowide' ] }
          };
          (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
              '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
          })();
          // end asyn google webfont loader

        // sub-menu
		$('a[data-submenu="submenu"]').hover(function(){
			$(this).next().slideDown(200)
            $(this).css({'border-bottom':'solid 5px #5fa6bc'})
		},function(){
			$(this).next().css({'display':'none'})
            $(this).css({'border-bottom':'solid 5px #fff'})
		});

		$('.nav-submenu').hover(function(){
			$(this).css({'display':'block'})
            $(this).prev().css({'border-bottom':'solid 5px #5fa6bc'})
		},function(){
			$(this).css({'display':'none'})
            $(this).prev().css({'border-bottom':'solid 5px #fff'})
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
        $('.product-img[data="slider"] a[class^="ic"]').hide()
        $('.product-img[data="slider"]').hover(function(){
            $('.product-img[data="slider"] a[class^="ic"]').show()
        },function(){
            $('.product-img[data="slider"] a[class^="ic"]').hide()
        });
        //reply form chat
        $('.reply').click(function(e){
            $('.box-comment .reply').show()
            $(this).hide()
            var a = $(this).parent()
        	$('.comment-post').appendTo(a)
        })

		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);