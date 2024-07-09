$(document).ready(function() {
	$("th").click(function() {
		if($(this).hasClass('sort-up')) {
			$(this).removeClass('sort-up').addClass('sort-down');
		}else if($(this).hasClass('sort-down')){
			$(this).removeClass('sort-down').addClass('sort-up');
		}else{
			$(this).addClass('sort-up').siblings().removeClass();
		}
		
	});
});