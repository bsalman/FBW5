$(document).ready(function () {
    // let open = false
    // $("#btnDiv").click(function(){
    //     if (open==false) {
    //          open= true
    //     $(".box").slideDown(function () {
    //         $("#btnDiv").text("Click Here to close")   
    //     });
    //     }else{if (open==true) {
    //         open= false
    //         $(".box").slideUp(function () {
    //             $("#btnDiv").text("Click Here to open")
    //         });
    //     }   
    //     }
       
    //     console.log(open);
        
    // })
    $("#btnDiv").click(function(){
        $(".box").fadeToggle();
        if($("#btnDiv").text()=="Click Here to Open"){
            $("#btnDiv").text("Click Here to close")
        }else{if ($("#btnDiv").text()=="Click Here to close") {
            $("#btnDiv").text("Click Here to Open")
        }}
    })



});