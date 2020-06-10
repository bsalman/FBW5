$(document).ready(function () {
    $("#btn1").click(function (e) { 
        e.preventDefault();
        alert($('.someDiv').width()+"X"+$('.someDiv').height()+"X")
    });
    ///////////////////////////////////////////
    $("#btn2").click(function (e) { 
        e.preventDefault();
        alert($('.someDiv').innerWidth()+"X"+$('.someDiv').innerHeight()+"X")
    });
});