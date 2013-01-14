(function($){
	$(document).ready(function(){
        // asyn google webfont loader
         WebFontConfig = {
            google: { families: [ 'Audiowide'] }
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

		// tooltip
        $('.tip-top').tooltip({placement: 'top'});
        $('.tip-left').tooltip({placement: 'left'});
        $('.tip-right').tooltip({placement: 'right'});
        $('.tip-bottom').tooltip({placement: 'bottom'});

        //login
        $('.login').toggle(function(){
            $('.form-login').slideDown()
        },function(){
            $('.form-login').slideUp()
        });
        //plans-pricing
        $('.plans-wrapper').hover(function(){
            $('.plans-wrapper').css({'opacity':'0.5'})
            $(this).css({'opacity':'1'})
        },function(){
            $('.plans-wrapper').css({'opacity':'1'})
        });

        // submenu responsive
        $(window).width(function () {
            if ($(window).width() < 767) {
                $('a[data-submenu="submenu"]').toggle(function(){
                    $(this).next().slideDown(200)
                    $(this).css({'border-bottom':'solid 5px #5fa6bc'})
                },function(){
                    $(this).next().css({'display':'none'})
                    $(this).css({'border-bottom':'solid 5px #fff'})
                });
            } else {
                // $('.container').show()
            }
        });

        //
        $('.collapse').toggle(function(){
            $(this).children().removeClass('icon-minus').addClass('icon-plus')
            $(this).parents('.box').find('.box-body').slideUp()
            $(this).parents('.box').find('.box-footer').slideUp()
        },function(){
            $(this).children().removeClass('icon-plus').addClass('icon-minus')
            $(this).parents('.box').find('.box-body').slideDown()
            $(this).parents('.box').find('.box-footer').slideDown()
        });

        //js button-checkbox
        
        $('.button-checkbox').toggle(function(){
            $('.slide').animate({'left':'40px'},200)
        },function(){
            $('.slide').animate({'left':'2px'},200)
        });

		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);