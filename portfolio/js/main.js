$(document).ready(function(){
	$('a.delete').bind('click', function(e){
		$('#responsive').modal();
	});

	$('#more-nav-item').bind('click', function(e){

	});

	// nav();
});

function nav() {
	var _settings = {
		minimal_holding_item: 1
	};

	/*Get navigation container*/
	$nav = $('#nav');

	/*Get menu container*/
	$menu = $('#nav .nav');

	/*Get profile container*/
	$profile = $('#nav .m-profile');

	$sub_hidden_menu = $('.hidden-item-container');

	$last_hidden_menu_item = $('#more-nav-item');

	/*Get init menu item*/
	$menu_init_item = $menu.find('li').length - 1;

	$(window).bind('resize', function(e){
		var _nav_inner_width = $nav.innerWidth();
		var _menu_inner_width = $menu.innerWidth();
		var _profile_inner_width = $profile.innerWidth();

		if((_menu_inner_width + _profile_inner_width) > _nav_inner_width) {
			console.log('hasOverflow');

			if($menu.find('li').length == _settings.minimal_holding_item) {
				return false;
			}

			var _sub_width = _menu_inner_width + _profile_inner_width - _nav_inner_width;

			var _i_ = Math.ceil(_sub_width / 55);

			console.log(Math.ceil(_i_));

			if(_i_ > 0) {
				if($sub_hidden_menu.find('ul li').length === 0) {
					_i_++;
					console.log(_i_);
				}

				for(var i = 0; i < _i_; i++) {
					/*Get last element*/
					$sub_hidden_menu.find('ul').prepend($last_hidden_menu_item.prev());
				}

				$last_hidden_menu_item.show();
			}

		} else {

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