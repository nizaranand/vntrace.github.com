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

	nav();
});

function nav() {
	var _settings = {
		minimal_holding_item: 3
	};

	/*Get navigation container*/
	$nav = $('#nav');

	/*Get menu container*/
	$menu = $('#nav .nav');

	/*Get profile container*/
	$profile = $('#nav .m-profile');

	$(window).bind('resize', function(e){
		var _nav_inner_width = $nav.innerWidth();
		var _menu_inner_width = $menu.innerWidth();
		var _profile_inner_width = $profile.innerWidth();

		if((_menu_inner_width + _profile_inner_width) > _nav_inner_width) {
			console.log('hasOverflow');
		}
	});
}

$.fn.hasOverflow = function() {
    var $this = $(this);
    var $children = $this.find('*');
    var len = $children.length;

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