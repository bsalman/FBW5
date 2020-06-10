$(document).ready(function(){
    let divBack=function () {
        $("#somDiv").animate({
        'left':'0px',
        'opacity':'1'
     },3000)
    } 
    $("#btn").click(function(e){
        e.preventDefault();
        $("#somDiv").animate({
           'left':'300px',
           'opacity':'0'
        },3000,function () {
           alert('done')})
       
        })

       
    $("#somDiv").mousemove(function(e){
         $("#somDiv").stop()
        })
    
    let goback= function () {
    $(".container>div:nth-child(1)").animate({
    'left':'9px'
    },3000,goReight)
    }
    let goReight= function(){
        $(".container>div:nth-child(1)").animate({
            'left':'359px'
            },3000,goback)} 
     goReight()

//    setInterval(() => {
//      $(".container>div:nth-child(1)").animate({
//         'left':'359px'
//     },3000,goback) 
//              }, 1000);

///////////////////////////////////////////
///chaining
$(".chainDiv").animate({
    'height':'200px'
},2000)
.slideUp(2000)
.slideDown(2000)
.text("hello")
.fadeOut(1000,function(){
    alert("finsh")
}
);

   
     
});