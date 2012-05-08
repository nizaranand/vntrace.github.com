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
                      reflections: false,
                      reflectionP: 0.4,
                      aspectRatio: 2.0,
                      slideshow: true,
                      xStep: 250,
                      imageFocusM: 1.5,
                      opacity: true,
                      glideToStartID: false,
                      slider: false });
});