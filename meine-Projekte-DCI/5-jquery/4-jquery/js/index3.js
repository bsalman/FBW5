$(function () {
    


    let htmlString = '<div><p>Hello FBW5 in Jquery <a href="#">click here</a></p></div><script>alert("I am java inside html")</script>'
    let smallDom = $(htmlString)
    smallDom.find('a').eq(1).click(function (e) { 
        e.preventDefault();
        alert('hello')
    });

    let someBtn = document.createElement('button')
    //someBtn.innerText = 'button'
    $(someBtn).text("hi");



    $('#container').append(smallDom);
    $('#container').append(someBtn);


});