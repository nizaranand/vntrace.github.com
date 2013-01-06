$(document).ready(function(){

	$('a.delete').bind('click', function(e){
		$('#responsive').modal();
	});

	$('#more-nav-item').bind('click', function(e){

		/*Get offset*/
		var _offset = $(this).offset();

		var _left  = _offset.left - $('.hidden-item-container ul li').length * 55 + 30;

		// $('.hidden-item-container').toggleClass('hide');
		$('.hidden-item-container').css({left: _left}).slideToggle('fast');
		return false;		
	});

	$(window).bind('resize', function(e){
		//updateNavbar();
	});
});

$.fn.hasOverflow = function() {
    var $this = $(this);
    var $children = $this.find('*');
    var len = $children.length;

    console.log(len);

    if (len) {
        var maxWidth = 0;
        var maxHeight = 0
        $children.map(function(){
            maxWidth = Math.max(maxWidth, $(this).outerWidth(true));
            maxHeight = Math.max(maxHeight, $(this).outerHeight(true));
        });

        return maxWidth > $this.width() || maxHeight > $this.height();
    }

    return false;
};