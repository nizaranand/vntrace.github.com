$(document).ready(function(){
	// Close handle for hot news button
	$('.hot-new .down').bind('click', function(){
		$('.hot-new').slideUp(300, 'easeOutBounce');
	});

	// Menu 

	$('ul.nav-left li').bind('click', function(e){
		e.preventDefault();
		$(this).find('ul.nav-sub').slideToggle(200);
	})

	// $('.scrollable').uscrollbar();

	var circular_2 = new ImageFlow();
	circular_2.init({ ImageFlowID: 'slider',
                      circular: true,
                      aspectRatio: 2.0,
                      aspectRatio: 1.618,
                      glideToStartID: false,
                      slider: false });
});