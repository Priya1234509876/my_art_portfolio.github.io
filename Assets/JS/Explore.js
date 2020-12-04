

var card_body;
var title;
var imagePath ;

// $(".btn_add_card").on("click",function(){
//     $(".new__card__").toggle();
// })

$(".buttons").on("click","#btn_add_card",function(){
// $("#btn_add_card").on("click",function(){
    $(".new__card__").append('<div class="form-group"><input type="text" id="path" class= " form-control" placeholder="Enter Image Path"></div>');
    $(".new__card__").append('<div class="form-group"><input type="text" id="title" class= "form-control"  placeholder="Enter Card Title"></div>')
    $(".new__card__").append('<div class="form-group"><input type="text"  id="id_card_body" class= "form-control"  placeholder="Enter Card Body"></div>')
    $(".new__card__").append('<div class="form-group"><button class="btn btn-outline-danger btn-sm new_card_btn p-3 "><i class="far fa-heart"></i></button></div>')
    //$(".new__card__").append('<div class="form-group"><button class="btn btn-outline-primary btn-sm new_card_btn_del p-3 "><i class="far fa-user"></i></button></div>')
    $("#path").keypress(function(event){
    if(event.keyCode === 13){
        imagePath = $("#path").val();
        $("#path").val("");
        $("#path").remove();  
        
    
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
             title = $("#title").val();
            $("#title").val("");
            $("#title").remove(); 
        }
    })

        $("#id_card_body").keypress(function(event){
            if(event.keyCode === 13){
                card_body = $("#id_card_body").val();
                $("#id_card_body").val("");
                $("#id_card_body").remove(); 
                 
            }
            

    }) 
    


   
    $(".form-group").on("click",".new_card_btn",function(){
        
        $(".row").append('<div class="col-lg-4 d-flex im_hi_div my-2 "><div class="card"><img src="' + imagePath + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + title + '</h5><p class="card-text">' + card_body + '</p><button class="btn btn-outline-light btn-sm mx-2 btn_delete_card">Delete Card</button><button class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></button></div><div class="card-footer"><small class="text-muted">Last updated 3 mins ago</small></div></div></div>');
        // $(this).parentsUntil("form").remove();
       $(".new_card_btn").remove();
       
       
        // $(".new_card_btn").remove();parentsUntil(".new__card__")
        
        // $(".new_card_btn_del").remove();
        // $(".new__card__").remove()
    //    $(".form-group").remove(); 
    
    })
        
    // $(".form-group").on("click",".new_card_btn",function(){
    //     $(this).parent().remove()});
    

 

    // $(".new_card_btn_del").on("click",function(event){
    //     $(this).parentsUntil(".to_help_del").remove();
    //     // $(".new_card_btn_del").remove();
    //     // $(".new_card_btn").remove();
    //     // event.stopPropagation();
       
    // })


   
    });    

  

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

$("#btn_dkmode").on("click", function(){
    $(".card").toggleClass("dkmode");
});

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


$(".row").on("click",".btn_delete_card",function(){
        $(this).parentsUntil(".row ").remove();
    } )

    $(".row").on("click",".card-img-top",function(){
        $(".card-body").toggle();
            $(".im_hi_div").toggleClass("d-flex");
    } );


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