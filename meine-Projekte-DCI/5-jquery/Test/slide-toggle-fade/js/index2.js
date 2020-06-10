$(document).ready(function () {
    //.stop(clearQueue,goToEnd)
    $('button').click(function(){
        $('div').stop()
    })
    $('div').animate({
        width:'400px',
        height:'200px',
    },2000)

    $('div').animate({ 
        width:'300px',
        height:'100px',},2000)
    $('div').animate({ 
            borderRadius:'15px',
            width:'300px',
            height:'100px',},2000)
    $('div').animate({ 
                borderRadius:'15px',
                width:'300px',
                height:'100px',
                },2000)
});