$(document).ready(function(){
	$('.m-nav a').hover(function(){
		$(this).stop().animate({
			width: '100%'
		}, 300);
	}, function(){
		$(this).css('width', 'auto').stop();
	});

	$('a.preview').colorbox({rel: 'preview1'});
});