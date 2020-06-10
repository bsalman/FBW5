$(function () {
    // add click event to btn1
    $('#btn1').click(function (e) { 
        e.preventDefault();
        let message = $('#someDiv > p').text();
        alert(message)
    });

    // add click event to btn2
    $('#btn2').click(function (e) { 
        e.preventDefault();
        $('#someDiv > h2').text("Hello FBW5");
    });

    // add click event to btn3
    $('#btn3').click(function (e) { 
        e.preventDefault();
        let message = $('#someDiv').html();
        alert(message)
    });
    // add click event to btn4
    $('#btn4').click(function (e) { 
        e.preventDefault();
        $('#someDiv > p').html("I am <strong>Strong</strong>");
    });
    // add click event to btn5
    $('#btn5').click(function (e) { 
        e.preventDefault();
        let message = $('#someDiv > input').val();
        alert(message)
    });
    // add click event to btn6
    $('#btn6').click(function (e) { 
        e.preventDefault();
        $('#someDiv > input').val("the new value");
    });
    // add click event to btn7
    $('#btn7').click(function (e) { 
        e.preventDefault();
        $('#someDiv > p').append("I am Extra <i>text</i>");
    });
    // add click event to btn8
    $('#btn8').click(function (e) { 
        e.preventDefault();
        $('#someDiv > input').after("<p>I am a text after the input</p>");
    });
    // add click event to btn9
    $('#btn9').click(function (e) { 
        e.preventDefault();
        $('#someDiv > input').before("<p>I am a text before the input</p>");
    });
    // add click event to btn10
    $('#btn10').click(function (e) { 
        e.preventDefault();
        $('#someDiv > p').remove();
    });
    // add click event to btn10
    $('#btn11').click(function (e) { 
        e.preventDefault();
        $('#someDiv').empty();
    });
});