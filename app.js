$(document).ready(function(){
	$("#toolbar a").on("click",function(){
		$("#toolbar a").removeClass("active");
		tab = $(this).attr("rel");
		page = "pages/"+tab+".html";
		
		$.ajax({
			type: 'GET',
			url: page,
			async:false,
			dataType:'html',
			success: function(data) { 
				$("#content").html(data);
				$(this).addClass("active");
				
				if(tab=="home"){
					$("#content a").on("click",function(){
						URL = $(this).attr("href");
						URL = URL;
						$.ajax({
							type: 'GET',
							url: URL,
							async:false,
							dataType:'html',
							success: function(data) { 
								$("#content").html(data);
							}
						});
						return false;
					});
				}
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
