/*
JFlyOut ( Jquery FlyOut Menu ) by Joko Wandiro
License: http://creativecommons.org/licenses/by-nc-sa/3.0/
Free for Private and Commercial Project
*/
(function($){
$.fn.JFlyOut= function(options){
	JFlyOut= {
		'hover': function($obj){
			
		},
		'toggle': function($obj){
			
		},
		'error': function(){
			alert("There's something error on JFlyOut");
		},
		getPosition: function($obj){
			return $obj.parent().attr('data-position');
		},
		getCSSObject: function(prev_position, zindex){
			attr= new Object;
			attr[position]= prev_position;
			attr['z-index']= zindex;
			return attr;
		}		
	}
	var settings= {
		'z-index': 1,
		'startTop': '0',
		'margin': '10',
		'position': 'left',
		'delay': '1000',
		'positions': ['left', 'right', 'top', 'bottom']
	};
	
	settings= $.extend(settings, options);
	
	// Checking Error Positions Property
	JFlyOut_error= 1;
	$.each(settings.positions, function(i, val){
		if( settings.position == val ){
			JFlyOut_error= 0;
		}
	})
	
	if( JFlyOut_error ){
		JFlyOut.error();
	}
	
	// Icon Width and Height
	iconWidth= $('.icon').first().outerWidth();
	iconHeight= $('.icon').first().outerHeight();
	
	// Set Top Position for each Menu
	this.attr({ 'data-position': settings.position }); // Adding Attribute Position	
	$menus= $('.flyout', this);
	$menus.each( function(i){
		$elem= $(this);
		elemWidth= $elem.outerWidth();
		if( i == 0 ){
			getTop= settings.startTop;
		}else{
			getTop= parseInt(settings.startTop) + ( (parseInt(settings.margin) + iconHeight) * i );
		}		
		// Set Style for FlyOut
		position= JFlyOut.getPosition($elem);
		getRight= elemWidth - iconWidth + 1;
		content_margin= iconWidth-2;
		$content_box= $elem.find('.content-box');
		content_boxHeight= $content_box.outerHeight();
		$icon= $elem.find('.icon');
		console.log(position);
		// Simplify This Code
		if( position == "left" ){
			$elem.css({ 'top': getTop + 'px', 'left': -getRight + 'px' });
			$icon.css({ 'float': 'right' });
			$content_box.css({ 'margin-right': content_margin + 'px' });
		}else if( position == "right" ){
			$elem.css({ 'top': getTop + 'px', 'right': -getRight + 'px' });
			$icon.css({ 'float': 'left' });
			$content_box.css({ 'margin-left': content_margin + 'px' });
		}else if( position == "top" ){
			$elem.css({ 'left': getTop + 'px', 'top': -content_boxHeight + 'px' });
			$elem.append($icon);
		}else if( position == "bottom" ){
			$elem.css({ 'left': getTop + 'px', 'bottom': -content_boxHeight + 'px' });
		}
		// Simplify This Code
	});
		
	$('.icon', $menus).mouseenter( function(){
		$elem= $(this).parent();
		position= JFlyOut.getPosition($elem.first());
		prev_position= $elem.css(position);
		if( prev_position != "0px" ){
			$elem.attr({ 'data-prev-position': prev_position });
		}
/*		console.log(prev_position + "->" + position);*/
		new_attr= JFlyOut.getCSSObject("0px", parseInt(settings['z-index']));
		$elem.css(new_attr);
/*		console.log(new_attr);*/
	});
	
	$menus.mouseleave( function(){
		$elem= $(this);
		position= JFlyOut.getPosition($elem);
		prev_position= $elem.attr('data-prev-position');
/*		console.log(position + "->" + prev_position);*/
		new_attr= JFlyOut.getCSSObject(prev_position, 0);
		$elem.css(new_attr);
/*		console.log(new_attr);*/
	});
};
})(jQuery);