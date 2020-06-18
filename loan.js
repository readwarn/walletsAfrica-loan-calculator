var navlinks=$(".collapse")
$(".close").click(function (e) { 
    navlinks.toggleClass("hidden");
    $(".l1").toggleClass("line-1");
    $(".l2").toggleClass("line-2");
    $(".l3").toggleClass("line-3");
});