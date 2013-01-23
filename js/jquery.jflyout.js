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
	
	// Initial Method for Flyout Menu
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
		position= JFlyOut.getPosition($elem);
		getRight= elemWidth - iconWidth + 1;
		content_margin= iconWidth-2;
		$content_box= $elem.find('.content-box');
		content_boxHeight= $content_box.outerHeight();
		$icon= $elem.find('.icon');
		// Set Initial Style Based position Attribute
		attr= new Object;
		if( position == "top" || position == "bottom" ){
			set_position= -content_boxHeight + 'px';
			attr.left= getTop + 'px';
			if( position == "top" ){ $elem.append($icon); }			
		}else{
			icon_attr= new Object;
			pos_margin= ( position == "left" ) ? 'right' : 'left';
			icon_attr['float']= pos_margin;
			$icon.css(icon_attr);
			content_box_attr= new Object;
			content_box_attr_margin= "margin-"+pos_margin;
			content_box_attr[content_box_attr_margin]= content_margin + 'px';			
			$content_box.css(content_box_attr);
			set_position= -getRight + 'px';
			attr.top= getTop + 'px';
		}
		attr[position]= set_position;
		$elem.css(attr);
/*		console.log(attr);*/
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