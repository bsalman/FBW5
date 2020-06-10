$(function () {
   $("#btn").click(function (e) { 
       e.preventDefault();
       $("#dialog").dialog()
       $("#dialog").dialog("close")
       $("#btn").click(function (e) {
           e.preventDefault();
           $("#dialog").dialog("open");
         })
       
   });


});