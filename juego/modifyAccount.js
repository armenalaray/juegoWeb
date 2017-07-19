$(document).ready(function(){
	
	$(".modifyAccount").on("click", function(){
		var modifyId = $(this).attr("modify_id");
		var sideBarWidth = $(".sidebar").width();
		//console.log(sideBarWidth);
		if(sideBarWidth >= 390){
			//significa que ya se abrio
			$("#deleteAccountBox").hide();
			$("#modifyAccountBox").hide();
			if(modifyId == 1){
				$("#deleteAccountBox").fadeIn(500);
			}
			else if(modifyId == 2){
				$("#modifyAccountBox").fadeIn(500);
			}
		}
		else{
			$(".sidebar").animate({maxWidth:"978px"}, 500,function(){
				if(modifyId == 1){
					$("#deleteAccountBox").fadeIn(500);
				}
				else if(modifyId == 2){
					$("#modifyAccountBox").fadeIn(500);
				}
			});
		}
		
		
	});
	
	$(".deleteButton").on("click",function(){
		//console.log($(this).text());
		if($(this).text() == "Yes"){
			//TODO:deleteaccount.php
			$.ajax({url:"deleteAccount.php",type:"GET",
				success:function(){
					window.location = "index.php";
				}
			});
		}
		else{
			//Redirect 
			$("#deleteAccountBox").hide();
			$(".sidebar").animate({maxWidth:"378px"}, 500);
		}
	});
	
	$(".cancelar").on("click",function(){
		$("#modifyAccountBox").hide();
		$(".sidebar").animate({maxWidth:"378px"}, 500);
	});
	
	/*$(this).on("click", function(event){
		//console.log("PageX: " + event.pageX + ",pageY: " + event.pageY);
		if($(".sidebar").width() >= 390){
			if(event.pageX > 700){
				$("#deleteAccountBox").hide();
				$("#modifyAccountBox").hide();
				$(".sidebar").animate({maxWidth:"378px"}, 500);
			}
		}
	});*/
	
});