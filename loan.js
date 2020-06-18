var navlinks=$(".collapse")
$(".close").click(function (e) { 
    navlinks.toggleClass("hidden");
    $(".l1").toggleClass("line-1");
    $(".l2").toggleClass("line-2");
    $(".l3").toggleClass("line-3");
});


var monthlyPay=$("#monthlyPay");
var totalPayment=$("#totalPayment");
var totalInterest=$("#totalInterest");
var cancel=$(".cancel");
var calc=$(".calc");
var output=$(".loan-output");
var accept=$(".accept");
var thanks=$(".thanks");
var tc=$(".t-cancel");
var alert1=$(".alert");
var duration=$("#duration");
var loan=$("#loan");

calc.click(function(e){

      var loan1=parseInt(loan.val());
      var duration1=parseInt(duration.val());
    if(isNaN(loan1)||isNaN(duration1)){
       alert1.removeClass("hidden");
    }
    else{
        output.removeClass("hidden");
        output.addClass("animate__slideInRight");

    }
});
cancel.click(function(e){
    output.addClass("hidden");
});

accept.click(function(e){
     thanks.removeClass("hidden");
     thanks.addClass("animate__zoomIn");
     output.addClass("hidden");
});

tc.click(function(e){
    thanks.addClass("hidden");
});

loan.click(function(e){
    alert1.addClass("hidden");
})

donation.click(function(e){
    alert1.addClass("hidden");
})

