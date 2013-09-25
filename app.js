var listaParabolas, myScroll;
$(document).ready(function(){
	// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	$("#toolbar a").on("click",function(){
		var idPagina = $(this).attr("rel");
		abrirPagina(idPagina, false);
		return false;
	});
	
	abrirPagina("home");

});

function addScroll () {
	myScroll = new IScroll('#content', { mouseWheel: true, click: true, hideScrollbar:false  });
	$('input[type=text]').bind('touchstart click', function(){
    $(this).focus();
  });
}

function addTooltip(){
	$(".atooltip").qtip({ 
		content: {
			attr: 'data-tooltip',
			title: 'About me',
			button: 'Cerrar'
		},
    show: {
        event: 'click'
    },
	position: {
        at: 'top center'
    },
	style: { classes: 'qtip-yellow' },
    hide: {
        event: false
    }
	})
}


function actualizarHeight(){
	var winHeight = $(window).height();
	var contentHeight = winHeight - 90;
	$("#content").css("height",contentHeight);
}


function abrirParabola(){

	$("#toolbar a").removeClass("active");
	var idParabola = $(this).attr("rel");
	abrirPagina(idParabola, true);	
	return false;	
	
}

function abrirPagina(idPagina, parabola){
	$("#content").html("");
	actualizarHeight();
	$("#toolbar a").removeClass("active");
	var contentHTML = $('#'+idPagina).html();
	contentHTML = '<div class="cf inner">'+contentHTML+'</div>';
	$('#content').html(contentHTML);

	addScroll();
		
	$("#toolbar a[rel="+idPagina+"]").addClass("active");
	
	if(!parabola){
		$('#content .contenedor').removeClass("contenedor");
	}
	
	if(idPagina=="home"){
		$(".inner").attr("id","divListadoParabolas")
		$(".inner ul li a").on("click",abrirParabola);		
		var options = {	valueNames: ['title']	};
		listaParabolas = new List('#divListadoParabolas', options);
	}

	addTooltip();
	return false;
}