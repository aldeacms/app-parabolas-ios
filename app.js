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
				$("#content").scrollTop(0);
				$(this).addClass("active");
				
				if(tab=="home"){
					$("#content").on("ready",function(){
						$("#content a").on("click",function(){
							URL = "pages/"+$(this).attr("href");
							$.ajax({
								type: 'GET',
								url: URL,
								async:false,
								dataType:'html',
								success: function(data) { 
									$("#content").html(data);
									$("#content").scrollTop(0);
									return false;
								}
							});
						});
					});
					
				}
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
