$(document).ready(function(){
	$("#toolbar a").on("click",function(){
		$("#toolbar a").removeClass("active");
		$(this).addClass("active");
	});

	var totalHeight = $(window).height();
	$("#content").css("height",totalHeight-90+"px");
});
