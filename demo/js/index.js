$(function  () {
	$('.dropdown-toggle').dropdown()
	$('.gouche-btn').bind('click',function  () {
		var $el=$(this).parent(),
			$layer=$el.find(".gouche-layer");
		console.log( $el );
		if($el.hasClass("up")){
			$el.removeClass("up");
			$layer.show();
		}else{
			$el.addClass("up");
			$layer.hide();
		}	
	})
})