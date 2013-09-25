$(document).ready(function(){
	$("#toolbar a").on("click",function(){
		$("#toolbar a").removeClass("active");
		page = "file://pages/"+$(this).attr("rel")+".html";
		
		$.ajax({
			type: 'GET',
			url: page,
			async:false,
			dataType:'html',
			success: function(data) { 
				$("#content").html(data);
				$(this).addClass("active");
				return false;
			}
		});
				
	});
	
	 resizeContent();
	 $(window).on('resize', function(){
		resizeContent();
	});
	
	$("#tabHome").click();
});

function resizeContent(){
	var totalHeight = $(window).height();
	$("#content").css("height",totalHeight-90+"px");
}
