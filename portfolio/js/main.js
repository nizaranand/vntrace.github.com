$(document).ready(function(){
	$(document).mouseup(function (e) {
	    var container = $('.has-sub.open');

	    if (container.has(e.target).length === 0)
	    {
	        container.removeClass('open');
	    }
	});

	$('.navigator li.has-sub > a').bind('click', function(e) {
		e.preventDefault();

		console.log($(this).offset());

		$(this).parent().addClass('open');
	})
});