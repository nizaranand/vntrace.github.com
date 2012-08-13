(function($){
	$(document).ready(function(){
		$('.upload').click(function(){
			$('.form-upload').css({'display':'block'})
		});
		$('.close').click(function(){
			$('.form-upload').css({'display':'none'})
		});
		// zoom img
		$('.main').click(function(){
			$('.box-img').removeClass('span12 box-show').addClass('offset2 span8')
			$('.box-img').show()
			$('.i-resize-full').removeClass('active')
		});
		$('.i-resize-full').toggle(function(){
			$(this).addClass('active')
			$('.box-img').hide()
			$(this).parents('.box-img').show().removeClass('offset2 span8').addClass('span12 box-show')
		},function(){
			$(this).removeClass('active')
			$('.box-img').show()
			$(this).parents('.box-img').removeClass('span12 box-show').addClass('offset2 span8')
		});
		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);