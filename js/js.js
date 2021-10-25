// Scroll Top hidden
$(window).scroll(() =>{
   if ($(this).scrollTop()>10)
     {
         $('#top').hide();
         $('.navbar').addClass( "changeTop");
         $(".scrollTop_button").show();
         $('.nav-link').addClass( "changeNav-link");

     }else{
         $('#top').show();
         $('.navbar').removeClass( "changeTop");
         $(".scrollTop_button").hide();
         $('.nav-link').removeClass( "changeNav-link");
     }
 });

// button scroll to top
$(".scrollTop_button").click(() =>{
   window.scrollTo({ top: 0, behavior: 'smooth'});
});
// mobile determine width
$(window).scroll( () =>{
   if (($(this).scrollTop()>=0)&&($(window).width() < 900))
     {
        $('.navbar').addClass( "changeNavMobile");
    }
});

//chi tiết sản phẩm
$(document).ready(() =>{
   var quantitiy=0;
   $('.quantity-right-plus').click((e) =>{  
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt($('#quantity').val());
      // If is not undefined       
      $('#quantity').val(quantity + 1)
      // Increment    
   });
   
   $('.quantity-left-minus').click((e) =>{
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt($('#quantity').val());
      // If is not undefined
      // Increment
      if(quantity>0){
         $('#quantity').val(quantity - 1);
      }
   });

   //page_welcome
   $('.pagewl_close').click(() =>{
      $('.page_welcome').hide();
   });

   //send_to_shop
   $('.sub').click(() =>{
      alert("Bạn đã gửi tin nhắn đến Shop!");
   });       
});


 // count down timer deal 
 // Set the date we're counting down to
var countDownDate = new Date("2021,10,30").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//typing home_animation 
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #17a2b8}";
        document.body.appendChild(css);
    };