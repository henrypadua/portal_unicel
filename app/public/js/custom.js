	$(document).ready(function(){
	$("#btn-toggle-not").click(function(){
		$(".toggle-not").toggle();
	});
});

function reload(){
	location.reload();
}

$(document).ready(function(){
	$("#btn-toggle-sidebar").click(function(){
		$(".logo-main").toggleClass("none");
		$(".logo-mini").toggleClass("inline");

		$(".toggle-sidebar i.fa").toggleClass("sidebar-mini");
		$(".sidebar").toggleClass("nav-toggle");
		$(".header-main").toggleClass("space-sidebar-ajust");
		$(".content-page").toggleClass("space-sidebar-ajust");
		$(".footer-main").toggleClass("space-sidebar-ajust");
	});

	// <'% If tela <> "dashboard" Then %>
	//  $("#btn-toggle-sidebar").click();
	// <'% End If %>
});