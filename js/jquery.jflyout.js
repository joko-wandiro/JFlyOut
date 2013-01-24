/*
JFlyOut ( Jquery FlyOut Menu ) by Joko Wandiro
License: http://creativecommons.org/licenses/by-nc-sa/3.0/
Free for Private and Commercial Project
*/
(function($){
$.fn.JFlyOut= function(options){
	JFlyOut= {
		'click': function($obj){
/*			console.log("Event Click");*/
			$('.icon', $obj).live('click', function(){
				$elem= $(this);
				$elemParent= $(this).parent();
				if( $elemParent.hasClass('active') ){
					JFlyOut.closeIt($elemParent);
				}else{
					JFlyOut.openIt($elem);
				}
			})
		},	
		'hover': function($obj){
/*			console.log("Event Hover");*/
			$('.icon', $obj).mouseenter( function(){
/*				console.log("Event mouseenter");*/
				JFlyOut.openIt($(this));
			});
			$obj.mouseleave( function(){
/*				console.log("Event mouseleave");*/
				JFlyOut.closeIt($(this));
			});
		},
		'openIt': function($obj){
			$elem= $obj.parent();
			$('.flyout').removeClass('active');
			$elem.addClass('active');
			JFlyOut.allContainer($('.flyout').not('.active'));
			position= this.getPosition($elem.first());
			prev_position= $elem.css(position);
			if( prev_position != "0px" ){
				$elem.attr({ 'data-prev-position': prev_position });
			}
			new_attr= this.getCSSObject("0px", parseInt(settings['z-index']));
			$elem.css(new_attr);
		},
		'closeIt': function($elem){
			$elem.removeClass('active');
			position= this.getPosition($elem);
			prev_position= $elem.attr('data-prev-position');
			new_attr= this.getCSSObject(prev_position, 0);
			$elem.css(new_attr);
		},
		'allContainer': function($elems){
			$elems.each( function(){
				JFlyOut.closeIt($(this));
			})
		},
		getPosition: function($obj){
			return $obj.parent().attr('data-position');
		},
		getCSSObject: function(prev_position, zindex){
			attr= new Object;
			attr[position]= prev_position;
			attr['z-index']= zindex;
			return attr;
		},
		'error': function(){
			alert("There's something error on JFlyOut");
		}		
	}
	var settings= {
		'z-index': 1,
		'event': 'hover',
		'startTop': '0',
		'margin': '10',
		'position': 'left',
		'delay': '1000',
		'positions': ['left', 'right', 'top', 'bottom'],
		'iconWidth': 36
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
	$('.flyout .icon span', this).css({ 'padding-left': settings.iconWidth, 'line-height': iconHeight + "px" });
	$menus.each( function(i){
		$elem= $(this);
		$icon= $elem.find('.icon');
		$iconSpan= $elem.find('.icon span');
		iconWidth= $iconSpan.outerWidth() + settings.iconWidth;
		elemWidth= $elem.outerWidth();
		console.log($elem);
		console.log(elemWidth + "->" + iconWidth);
		if( i == 0 ){
			getTop= settings.startTop;
		}else{
			iconFactor= ( position == "top" || position == "bottom" ) ? iconWidth : iconHeight;
			getTop= parseInt(settings.startTop) + ( (parseInt(settings.margin) + iconFactor) * i );
		}
		position= JFlyOut.getPosition($elem);
		$content_box= $elem.find('.content-box');
		content_boxWidth= $content_box.width();
		content_boxHeight= $content_box.outerHeight();		
		// Set Initial Style Based position Attribute
		attr= new Object;
		icon_attr= new Object;
		icon_attr['width']= iconWidth;
		border_disable= "border-"+position;
		icon_attr[border_disable]= "none";
		if( position == "top" || position == "bottom" ){
			set_position= -content_boxHeight + 'px';
			attr.left= getTop + 'px';
			if( position == "top" ){ $elem.append($icon); }			
		}else{			
			pos_margin= ( position == "left" ) ? 'right' : 'left';
			icon_attr['float']= pos_margin;			
			content_box_attr= new Object;
			content_box_attr_margin= "margin-"+pos_margin;
			content_box_attr[content_box_attr_margin]= iconWidth + 'px';
			$content_box.css(content_box_attr);
/*			set_position= -elemWidth + 'px';*/
			set_position= -elemWidth + 'px';
			attr.top= getTop + 'px';
		}
		$icon.css(icon_attr);
		attr[position]= set_position;
/*		console.log(attr);*/
		$elem.css(attr).attr({ 'data-prev-position': set_position });
/*		console.log(attr);*/
	});
	
	// Trigger Event	
	JFlyOut[settings.event]($menus);
};

$(document).ready( function(){
/*	$('body').click( function(e){
		if( e.target.tagName == "BODY" ){
			JFlyOut.error();
		}
	});*/
})
})(jQuery);