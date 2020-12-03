

$("#img_png").click(function(){
 $(".back_grad").toggleClass("grad_change");
 
//  $(".row").css({
//     "background": "pink",
//    "color" : "black"
//    })
// $("#sec31").addClass("grad_change");
// alert("connected")
// $(this).remove();
});

//take input
//save image address
//remove top pictuer with a fadeout
//text content change

// $("input[type='text']").keypress(function(event){
//     if(event.which === 13){
// 		v		var imagePath = $(this).val();
// 		$(this).val("");
//      
//         $(".image_top_tag").remove();
// 		$("#top_image").append('<img src="' + imagePath + '" class="image_top_tag">')
// 	}
// })

// $("input[type='text']").keyup(function(event){
//     if(event.which === 13){
// 		$("#btn_top_image").click();
// 			}
// })


$("#btn_top_image").click(function(){
    
		var imagePath = $("input[type='text']").val();
		$("input[type='text']").val("");
     
        $(".image_top_tag").remove();
		$("#top_image").append('<img src="' + imagePath + '" class="image_top_tag">')
	
})

$("input[type='text']").keypress(function(event){
    if(event.keyCode === 13){
		$("#btn_top_image").click();
			}
})

