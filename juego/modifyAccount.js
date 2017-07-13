$(document).ready(function(){
	$("#modifyAccount").on("click", function(){
		var modifyId = $(this).attr("modify_id");
		//$("#deleteAccountBox").hide();
		$(".sidebar").animate({maxWidth:"978px"}, 1000,function(){
			$("#deleteAccountBox").fadeIn(1000);
		});
		
	});
});