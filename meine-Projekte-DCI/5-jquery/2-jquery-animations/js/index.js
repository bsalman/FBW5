$(document).ready(function () {
    // $(selector).animate(object options)
    // $(selector).animate(object options, time)
    // $(selector).animate(object options, time, callbacl)
    // option the styles that will be changed
    // time by mileseconds
    // callback is a function will run after finishing the animation
    // click event btn
    $("#btn").click(function (e) { 
        e.preventDefault();
        $("#someDiv").animate({
            'left': '300px',
            'opacity': '0'
        },3000, function () {
            alert('done');
          })
    });

    // mousemoveevent for someDiv
    $('#someDiv').mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        // $('#someDiv').stop()
        $(this).stop()
    });

    
    // create a function to make the boxgo back
    let goBack = function () {
        $('.container > div:nth-child(1)').animate({
            'left': '0'
        }, 2000, goForward)
      }

    let goForward = function () {
        $('.container > div:nth-child(1)').animate({
            'left': '350px'
        }, 2000, goBack)
      }

      goForward()

      // chain methods jquery
      $('.chainDiv').animate({
          'height': '200px'
      },1000)
      .slideUp(2000)
      .text("Hello I am here")
      .slideDown(1000)
      .fadeOut(1000,function () {
          alert("mombo jumbo done")
        });
      

});
