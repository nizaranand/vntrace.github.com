$(document).ready(function(){
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

	function updateNavbar() {
		var _navbarWidth = $('.m-navbar').innerWidth();
		var _navbarInnerWidth = $('.m-navbar-inner').innerWidth();
		var _profileBarWidth = $('.m-profile').innerWidth();

		console.log(_navbarWidth, _navbarInnerWidth, _profileBarWidth);

		var _round = 45;

		var _navCurrentWidth = _navbarInnerWidth + _profileBarWidth + _round;

		if(_navCurrentWidth > _navbarWidth) {
			/*Overflow*/
			var _subWidth = _navCurrentWidth - _navbarWidth;

			var _nHiden = Math.ceil(_subWidth/55);

			console.log(_nHiden);

			if($('.hidden-item-container ul li').length === 0) {
				_nHiden += 1;
			}

			for (var i = 0; i < _nHiden; i++) {
				$('.hidden-item-container ul').prepend($('#more-nav-item').prev());
			};

			$('#more-nav-item').removeClass('hide');
		} else {
			
		}
	}	
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