

// function readImage(file){
// 	const selected_img = new FileReader();
// 	selected_img.addEventListener('load', (event)=>{
// 	  $("#Upload_Image").src = event.target.result;
// 	});
// 	selected_img.readAsDataURL(file);
// 	}


// function readURL(el) {
//     if (el.files && el.files[0]) {
//          var FR= new FileReader();
//          FR.onload = function(e) {
//               $("#top_id_image").attr("src", e.target.result);
//             //   socket.emit('image', e.target.result);
//             //   console.log(e.target.result);
//          };       
//          FR.readAsDataURL( el.files[0] );
//     } 
// };
// const status = document.getElementById('status');
// const output = document.get('top_image');
// if (window.FileList && window.File && window.FileReader) {
	
	$('#file-selector').on('change', event => {
		// $("#top_image").remove();
	//   output.src = '';
	//   status.textContent = '';
	  const file = event.target.files[0];
	//   if (!file.type) {
	// 	status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
	// 	return;
	//   }
	//   if (!file.type.match('image.*')) {
	// 	status.textContent = 'Error: The selected file does not appear to be an image.'
	// 	return;
	//   }
	  const reader = new FileReader(this);
	  reader.addEventListener('load', event => {
		 result = event.target.result;
		 $('#top_image').css('background-image', 'url("' + result + '")');
		// $("#top_row").append('<div class="col-lg-12 d-flex align-items-end flex-column " id="top_image" style="background-image: url(' + result + ');"><div class="mt-auto"><label class="custom-file-upload btn btn-outline-light btn-lg"><input type="file" id="file-selector"  ><i class="fas fa-camera"></i></label></div></div>')

	});
	  reader.readAsDataURL(file);
	 
	}); 
//   }


	// if (window.FileList && window.File && window.FileReader) {
    //     document.getElementById('upload_image').addEventListener('change', event => {
    //       $("#top_id_image").src = '';
    //     //   status.textContent = '';
    //     //   const file = event.target.files[0];
    //     //   if (!file.type) {
    //     //     status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
    //     //     return;
    //     //   }
    //     //   if (!file.type.match('image.*')) {
    //     //     status.textContent = 'Error: The selected file does not appear to be an image.'
    //     //     return;
	// 	//   }
		
    //       const reader = new FileReader();
    //       reader.addEventListener('load', event => {s
	// 		$("#top_id_image").src = event.target.result;
    //       });
    //       reader.readAsDataURL(file);
    //     }); 
	//   }
	  


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





