/*
JFlyOut ( Jquery FlyOut Menu ) by Joko Wandiro
License: http://creativecommons.org/licenses/by-nc-sa/3.0/
Free for Private and Commercial Project
*/
(function($){
$.fn.JFlyOut= function(options){
	JFlyOut= {
		
	}
	var settings= {
		'z-index': 1,
		'startTop': '0',
		'margin': '10',
		'delay': '1000'
	};
	
	settings= $.extend(settings, options);	
	// Icon Width and Height
	iconWidth= $('.icon').first().outerWidth();
	iconHeight= $('.icon').first().outerHeight();
	
	// Set Top Position for each Menu
	$menus= this;
	$menus.addClass('menu-active');	
	$menus.each( function(i){
		$elem= $(this);
		elemWidth= $elem.outerWidth();
		if( i == 0 ){
			getTop= settings.startTop;
		}else{
			getTop= parseInt(settings.startTop) + ( (parseInt(settings.margin) + iconHeight) * i );
		}
		// Set Style for Menu
		getRight= elemWidth - iconWidth + 1;
		$elem.css({ 'top': getTop + 'px', 'right': -getRight + 'px' });
		// Set Style for Content Box
		content_margin_left= iconWidth-1;
		$content_box= $elem.find('.content-box');
		$content_box.css({ 'margin-left': content_margin_left + 'px' });
	});
	
	prev_right= $elem.first().css('right');
	delay= parseInt(settings.delay);
	// Hover Function
	$menus.hover( function(){
		$elem= $(this);
		if( $elem.hasClass("menu-active") ){
			$menus.removeClass('menu-active');
			$elem.css({ 'z-index': parseInt(settings['z-index']) });
			$elem.animate({ 'right': '0px' }, delay);
		}
	}, function(){
		$elem= $(this);
		$elem.animate({ 'right': prev_right }, delay, function(){
			$menus.addClass('menu-active');
			$elem.css({ 'z-index': 0 });
		});
	});
};
})(jQuery);