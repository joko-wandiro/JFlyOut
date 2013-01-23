<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<title>Sidebar Menu</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="js/jquery-1.7.1.min.js"></script>
<script src="js/jquery.jflyout.js"></script>
<link href="css/jquery.flyout.css" rel="stylesheet" type="text/css" />
<script type="text/javascript">
$(document).ready( function(){
	
	/*$('#slidefullo').slidefullo(fullscreenOpts);*/
	
/*	prev_right= "";
	$('.sidebar').hover( function(){
		$obj= $(this);
		width= $obj.find('.icon').outerWidth();
		height= $obj.find('.icon').outerHeight();
		console.log(width + "->" + height);
		prev_right= $obj.css('right');
		$obj.css({ 'right': '0px', 'z-index': 1 });
	}, function(){
		$obj= $(this);
		$obj.css({ 'right': prev_right, 'z-index': 0 });
	});*/

	var settings= {
		'startTop': '100',
		'margin': '10'
	}
	$('#flyout-first .sidebar').JFlyOut(settings);
	
	var settings= {
		'startTop': '100',
		'margin': '10'
	}
	$('#flyout-first .sidebar').JFlyOut(settings);
});
</script>
<style>
/*.icon { display: inline-block; width: 36px; height: 60px; float: left; }
.content-box { float: none; min-height: 300px; background: #eee; }
.sidebar { position: fixed; width: 300px; }
#facebook_icon { background: url('images/facebook.png') no-repeat center center; }
#custom_box { background: url('images/custom_box.png') no-repeat center center; }
#facebook-content { border: 4px solid #3B5998; }
#custom_box-content { border: 4px solid #EE3963 }*/
</style>
</head>
<body>
<div id="flyout-first">
	<div class="sidebar">
		<div id="facebook_icon" class="icon">&nbsp;</div>
		<div id="facebook-content" class="content-box">Facebook Fan Page</div>
	</div>
</div>
<div id="flyout-second">
	<div class="sidebar">
		<div id="custom_box" class="icon">&nbsp;</div>
		<div id="custom_box-content" class="content-box">
		Custom Box
		</div>
	</div>
</div>

<!-- FlyOut Menu Structure -->
<!--<div class="sidebar" id="facebook-sidebar">
	<div id="facebook_icon" class="icon">&nbsp;</div>
	<div class="facebook-content content-box">
	Facebook Fan Page
	</div>
</div>
<div class="sidebar" id="custom-box-sidebar">
	<div id="custom_box" class="icon">&nbsp;</div>
	<div class="custom_box-content content-box">
	Custom Box
	</div>
</div>-->
</body>
</html>