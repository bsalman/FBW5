// $(selector).methode()
// alternative window.onload
$(document).ready(function () {
    // addevent to btn1
    $("#btn1").click(function (e) {
        // show or hide the content
        $(".someDiv").toggle(500);
        // check btn1 content to set the righ text
        if ($(this).text() == "hide"){
            $(this).text("Show")
        } else {
            $(this).text("hide")
        }
      })

    

});

// diffrent way
$(function () {

  })