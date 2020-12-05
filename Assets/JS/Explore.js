
$(".row").on("click",".btn_delete_card",function(){
    $(this).parentsUntil(".row ").remove();
});

$(".row").on("click",".card-img-top",function(){
    $(".card-body").toggle();
        $(".im_hi_div").toggleClass("d-flex");
});

$("#btn_dkmode").on("click", function(){
    $(".card").toggleClass("dkmode");
});



// $(".btn_add_card").on("click",function(){
//     $(".new__card__").toggle();
// })

$(".buttons").on("click","#btn_add_card",function(){
    $(".temp-form").remove();
    // $( ".new_card_btn").trigger( "click" );
    // $('.form-group button').trigger('click');
    // $(".new_card_btn").click();
    var card_body= null;
var title = null;
var imagePath = null;


// $("#btn_add_card").on("click",function(){
    // $(".new__card__").append('')
    $(".new__card__").append('<form class="temp-form"><div class="form-group"><input type="text" id="path" class= " form-control" placeholder="Enter Image Path"></div><div class="form-group"><input type="text" id="title" class= "form-control"  placeholder="Enter Card Title"></div><div class="form-group"><input type="text"  id="id_card_body" class= "form-control"  placeholder="Enter Card Body"></div><div class="form-group d-inline-flex"><button type= "button" class="btn btn-primary btn-sm new_card_btn p-3  " >ADD</button></div><div class="form-group d-inline-flex mx-3"><button type= "button" class="btn btn-danger btn-sm new_card_btn_cancel p-3 " >CANCEL</button></div></form>');
    // $(".new__card__").append('')
    // $(".new__card__").append('')
    // $(".new__card__").append('')
    // $(".new__card__").append('')
    //type="button"   onclick="getData(); return false"


    //$(".new__card__").append('<div class="form-group"><button class="btn btn-outline-primary btn-sm new_card_btn_del p-3 "><i class="far fa-user"></i></button></div>')
    $("#path").keypress(function(event){
    if(event.keyCode === 13){
        imagePath = $(this).val();
        $(this).val("");
        $(this).remove();  
        
    
    // $("input[type='text']").fadeOut;
    
    }
})
    
    $("#title").keypress(function(event){
        // $(function() {
        //     var e = $.Event('keypress');
        //     e.which = 13; // Character 'A'
        //     $("#path").trigger(e);
        // });
        // $("#path").keypress(function(event)
        //     {event.keyCode === 13})
        // $("#path").remove(); 
        if(event.keyCode === 13){
             title = $(this).val();
            $(this).val("");
            $(this).remove(); 
        }
    })

        $("#id_card_body").keypress(function(event){
            if(event.keyCode === 13){
                card_body = $(this).val();
                $(this).val("");
                $(this).remove(); 
                 
            }
            

    }) 
    

    
   
    $(".form-group").on("click",".new_card_btn",function(){
        // e.preventDefault();
        $(".temp-form").remove();
        // event.preventDefault();
        $(".row").append('<div class="col-lg-4 d-flex im_hi_div my-2 "><div class="card"><img src="' + imagePath + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + title + '</h5><p class="card-text">' + card_body + '</p><button class="btn btn-outline-light btn-sm mx-2 btn_delete_card">Delete Card</button><button type="button" onclick="getData()" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></button></div><div class="card-footer"><small class="text-muted">Last updated 3 mins ago</small></div></div></div>');
        // getData();
    })   
    $(".form-group").on("click",".new_card_btn_cancel",function(){
        
        $(".temp-form").remove();
      
    })    
       
});   
        // $(this).parentsUntil("form").remove();
       
       
       
        // $(".new_card_btn").remove();parentsUntil(".new__card__")
        
        // $(".new_card_btn_del").remove();
        // $(".new__card__").remove()
    //    $(".form-group").remove(); 
    
   
        
    // $(".form-group").on("click",".new_card_btn",function(){
    //     $(this).parent().remove()});
    

 

    // $(".new_card_btn_del").on("click",function(event){
    //     $(this).parentsUntil(".to_help_del").remove();
    //     // $(".new_card_btn_del").remove();
    //     // $(".new_card_btn").remove();
    //     // event.stopPropagation();
       
    // })


   
       

  

    // if($("#body").remove())   {
       
    // } 
    


// entering card body

// $(".buttons").append('<input id="body" placeholder="Enter Card Body">')
//     $("#body").keypress(function(event){
//     if(event.keyCode === 13){
//         var body_text = $("#body").val();
//         $("#body").val("");
//         $(".new_card").append('<p class="card-text">' +body_text + '</p><button class="btn btn-outline-light btn-sm mx-2 btn_delete_card">Delete Card</button><button class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></button></div><div class="card-footer"><small class="text-muted">Last updated 3 mins ago</small></div></div></div>');    
    
//     // $("input[type='text']").fadeOut;
//     $("#body").remove(); 
//     }
// })


// } )



// $(".card-img-top").on("click", function(){
//     $(".card-body").toggle();
//     $(".im_hi_div").toggleClass("d-flex");
// })

// $(".card-img-top").click(function(){
//     $(".card-body").remove();
// })

// $(".btn_delete_card").on("click",function(){
//     $(".btn_delete_card").parentsUntil(".row ").remove();
// } )





// $(".btn_delete_card").on("click",'parentsUntil(".row ")', function(){
//     $(this).remove();
// } )

// $(document).on('click', ".card", function(){
//     $(this).remove();
// } )


// C O R R  E C T
// $(".im_hi_div").on("click",".card-img-top", function(){
//     $(".card-body").toggle();
//     $(".im_hi_div").toggleClass("d-flex");
// });

// $(".btn_delete_card").on("click",function(){
//     $(this).parentsUntil(".row ").remove();
// } )
// C O R R  E C T
// });