(function($){

    $(document).ready(function(){
      var _a = 2.12765957446;
      var _b = 6.382978723404255;
      var _span1 =_a*0 + _a/2 + _b*1 + "%";var _span2 = _a*1 + _a/2 + _b*2 + "%";
      var _span3 = _a*2  + _a/2 + _b*3 + "%";var _span4 = _a*3  + _a/2 + _b*4 + "%";
      var _span5 = _a*4  + _a/2 + _b*5 + "%";var _span6 = _a*5  + _a/2 + _b*6 + "%";
      var _span7 = _a*6  + _a/2 + _b*7 + "%";var _span8 = _a*7  + _a/2 + _b*8 + "%";
      var _span9 = _a*8  + _a/2 + _b*9 + "%";var _span10 = _a*9 + _a/2 + _b*10 + "%";
      var _span11 = _a*10 + _a/2 + _b*11 + "%";var _span12 = _a*11 + _a/2 + _b*12 + "%";


      // var _g = $('#main').attr('class')
      // if ($('#main').hasClass(_g)) {
      //  $('#main').attr('class',_g).css({'background':'green','margin-left':(_f)})
      // };
      if ($('#main').hasClass('span1')) {
        $('#main').attr('class','span1').css({'margin-left':_span11})
      };
      if ($('#main').hasClass('span2')) {
        $('#main').attr('class','span2').css({'margin-left':_span10})
      };
      if ($('#main').hasClass('span3')) {
        $('#main').attr('class','span3').css({'margin-left':_span9})
      };
      if ($('#main').hasClass('span4')) {
        $('#main').attr('class','span4').css({'margin-left':_span8})
      };
      if ($('#main').hasClass('span5')) {
        $('#main').attr('class','span5').css({'margin-left':_span7})
      };
      if ($('#main').hasClass('span6')) {
        $('#main').attr('class','span6').css({'margin-left':_span6})
      };
      if ($('#main').hasClass('span7')) {
        $('#main').attr('class','span7').css({'margin-left':_span5})
      };
      if ($('#main').hasClass('span8')) {
        $('#main').attr('class','span8').css({'margin-left':_span4})
      };
      if ($('#main').hasClass('span9')) {
        $('#main').attr('class','span9').css({'margin-left':_span3})
      };
      if ($('#main').hasClass('span10')) {
        $('#main').attr('class','span10').css({'margin-left':_span2})
      };
      if ($('#main').hasClass('span11')) {
        $('#main').attr('class','span11').css({'margin-left':_span1})
      };

      //main-left

      if ($('#main-left').hasClass('span1')) {
        $('#main-left').attr('class','span1').css({'margin-right':_span11})
      };
      if ($('#main-left').hasClass('span2')) {
        $('#main-left').attr('class','span2').css({'margin-right':_span10})
      };
      if ($('#main-left').hasClass('span3')) {
        $('#main-left').attr('class','span3').css({'margin-right':_span9})
      };
      if ($('#main-left').hasClass('span4')) {
        $('#main-left').attr('class','span4').css({'margin-right':_span8})
      };
      if ($('#main-left').hasClass('span5')) {
        $('#main-left').attr('class','span5').css({'margin-right':_span7})
      };
      if ($('#main-left').hasClass('span6')) {
        $('#main-left').attr('class','span6').css({'margin-right':_span6})
      };
      if ($('#main-left').hasClass('span7')) {
        $('#main-left').attr('class','span7').css({'margin-right':_span5})
      };
      if ($('#main-left').hasClass('span8')) {
        $('#main-left').attr('class','span8').css({'margin-right':_span4})
      };
      if ($('#main-left').hasClass('span9')) {
        $('#main-left').attr('class','span9').css({'margin-right':_span3})
      };
      if ($('#main-left').hasClass('span10')) {
        $('#main-left').attr('class','span10').css({'margin-right':_span2})
      };
      if ($('#main-left').hasClass('span11')) {
        $('#main-left').attr('class','span11').css({'margin-right':_span1})
      };

      var _bb = $('#main')
      $('.change-menu').toggle(function(){
            // var e = document.getElementById("main");
            // e.id = "main-left";
            // $('#main-left').css({'margin-left':'1.06382978723%'})
            // $('#main').removeClass('main-left').addClass('main')
            
            
            _bb.css({'margin-left':'1.06382978723%'})
            $('#sidebar').removeClass('sidebar').addClass('sidebar-right')
            $('.footer').hide(50).show(50)
            $(this).children().attr('class','icon-align-left')

        },function(){
            if (_bb.hasClass('span1')) {
                    $('#main').css({'margin-left':_span11})
                };
            if (_bb.hasClass('span2')) {
                    $('#main').css({'margin-left':_span10})
                };
            if (_bb.hasClass('span3')) {
                    $('#main').css({'margin-left':_span9})
                };
            if (_bb.hasClass('span4')) {
                    $('#main').css({'margin-left':_span8})
                };
            if (_bb.hasClass('span5')) {
                    $('#main').css({'margin-left':_span7})
                };
            if (_bb.hasClass('span6')) {
                    $('#main').css({'margin-left':_span6})
                };
            if (_bb.hasClass('span7')) {
                    $('#main').css({'margin-left':_span5})
                };
            if (_bb.hasClass('span8')) {
                    $('#main').css({'margin-left':_span4})
                };
            if (_bb.hasClass('span9')) {
                    $('#main').css({'margin-left':_span3})
                };
            if (_bb.hasClass('span10')) {
                    $('#main').css({'margin-left':_span2})
                };
            if (_bb.hasClass('span11')) {
                    $('#main').css({'margin-left':_span1})
                };
            $('#sidebar').removeClass('sidebar-right').addClass('sidebar')
            $('.footer').hide(50).show(50)
            $(this).children().attr('class','icon-align-left')
        });

    });
})(jQuery);