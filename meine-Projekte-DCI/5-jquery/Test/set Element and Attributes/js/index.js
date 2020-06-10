$(document).ready(function () {
    let containerText = $('#container').text()
    $('p').text(containerText)
    let containerHtml= "<div><lu><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></lu></div>"
    $('#container').html(containerHtml)
   

});