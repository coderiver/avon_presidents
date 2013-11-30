$(document).ready(function() {

	// product__popup close
	$(".js-close").click(function() {
		$(this).parents(".popup").fadeOut("fast");
	});

	// footer
	$(function() {
		var footerHeight = $(".footer").height();
		$(".out").css("margin-bottom", -footerHeight);
		$(".push").css("height", footerHeight);
	});

	$(window).resize(function() {
		var footerHeight = $(".footer").height();
		$(".out").css("margin-bottom", -footerHeight);
		$(".push").css("height", footerHeight);
	});
});