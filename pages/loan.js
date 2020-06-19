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
var interest=$("#interest");

calc.click(function(e){
      var principal=parseFloat(loan.val());
      var interest1=parseFloat(interest.val()) / 100 / 12;
      var payments=parseFloat(duration.val()) * 12;
      //Monthly payment
      var x = Math.pow(1 + interest1, payments); 
      var monthly = (principal*x*interest1)/(x-1);
       
     //if user input is valid
    if(!isFinite(monthly)){
       alert1.removeClass("hidden");
    }
    else{
        monthlyPay.val(monthly.toFixed(2));
        totalPayment.val((monthly*payments).toFixed(2));
        totalInterest.val(((monthly*payments)-principal).toFixed(2));
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

