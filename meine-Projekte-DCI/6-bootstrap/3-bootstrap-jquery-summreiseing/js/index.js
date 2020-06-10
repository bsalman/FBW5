$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });

    // $("#btn1").on("touchend",function (e) {
    //     this.text("")

         
    //  })
    let btn=document.querySelector('#btn1')
  btn.addEventListener("touchstart",(e)=>{
      btn.innerText="Tapped"
      console.log(e.touches);
      
  })


  });
  let body= document.querySelector('body');
  let touchesConter=document.querySelector('#span1')
  body.addEventListener("touchstart",(e)=>{
    touchesConter.innerText=e.touches.length
  })

 