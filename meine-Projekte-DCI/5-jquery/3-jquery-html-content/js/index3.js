$(document).ready(function () {
    $('.collapse > h2 > span').click(function (e) { 
        e.preventDefault();
        $('.collapse > div').slideUp()


        let currentText=$(this).text()
        $('.collapse > h2>span').text("+")
        // $(this).parent().next().slideToggle();
        // $(this).text($(this).text()=='+'?'-':'+')
        
        currentText=="-"?$(this).text("+").parent().next().slideUp():$(this).text("-").parent().next().slideDown()
        
    });
});