$(
	function  () {

		$('.carousel').carousel()
		$('#campareModal').modal({
			backdrop:false,
			keyboard:true,
			show:false,
			remote:false

		})
		$("#compareWrap .close").bind('click',function  (e) {
			// console.log( e );
			var $wrap=$(e.currentTarget).parent();
			$wrap.fadeOut(function  () {
				$wrap.remove();
			});
			var $num=$("#campareModal .cp-num");
			var num=$num.text()*1-1;
			$num.text(num);
		}) 

		$('#carTab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		})		
	}
)