
$("#btn_dkmode").click(function(){
    $(".card").toggleClass("dkmode");
});

$(".card-img-top").click(function(){
    $(".card-body").toggle();
    $(".im_hi_div").removeClass("d-flex");
})

// $(".card-img-top").click(function(){
//     $(".card-body").remove();
// })