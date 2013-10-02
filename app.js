document.addEventListener("deviceready", onDeviceReady, false);
var iabRef = null;
function onDeviceReady() {
	$(".navbar a").on("click",function(){
		$(".navbar a").removeClass("active");
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
				
				if($("#listadoParabolas").length){
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
									$(".brand").html("Par&aacute;bola");
									return false;
								}
							});
						});					
				}
				$(this).addClass("active");
				
				$("a[target=_blank]").on("click",function(){
					URL = $(this).attr("href");
					window.open(encodeURI(URL), '_blank', 'location=yes');
					return false;
				});
				
				if(tab=="about" || tab=="email"){
					$(".navbar-toggle").click();
					$(".brand").html($(this).attr("title"));
				}
				else{
					$(".brand").html("Par&aacute;bolas");
				}
				return true;
			}
		});
				
	});
	
	
	 resizeContent();
	 $(window).on('resize', function(){
		resizeContent();
	});
	
	$("#tabHome").click();
}
function resizeContent(){
	var totalHeight = $(window).height();
	$("#content").css("height",totalHeight-70+"px");
}
