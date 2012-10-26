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
			$('.navbar-search').show()
		},function(){
			$('.navbar-search').hide()
		});

		//end zoom img
		$('a[href$="#"]').click(function(e){
			e.preventDefault();
		});
	});
})(jQuery);