document.addEventListener("deviceready", onDeviceReady, false);
var iabRef = null;
function onDeviceReady() {
	
	$("#menu").mmenu({
	   configuration: {
		  pageNodetype: "section"
	   }
	});

	$("#menu a").on("click",function(){
		
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
				
				if(tab=='home'){
					$("#btnBack").hide();
					$("#btnMenu").show();
					$("#listadoParabolas a").on("click",function(){
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
				}
				else{
					$("#btnMenu").hide();
					$("#btnBack").show();
				}
				
				$("a[target=_blank]").on("click",function(){
					URL = $(this).attr("href");
					window.open(encodeURI(URL), '_blank', 'location=yes');
					return false;
				});
				
				return false;
			}
		});
		
		$("#menu").trigger("close");
				
	});
	
	$("#btnBack").on("click",function(){
		$("#tabHome").click();
	});
	
	
	 resizeContent();
	 $(window).on('resize', function(){
		resizeContent();
	});
	
	$("#tabHome").click();
}

function resizeContent(){
	var totalHeight = $(window).height();
	$("#content").css("height",totalHeight-60+"px");
}
