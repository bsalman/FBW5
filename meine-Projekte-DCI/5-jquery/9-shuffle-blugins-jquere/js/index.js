$(document).ready(function(){ 
var Shuffle = window.Shuffle;
var element = document.querySelector('.container');
var shuffleInstance = new Shuffle(element, {
    itemSelector: '.content',  
});
$('#btn').click(function (e) { 
    e.preventDefault();
    shuffleInstance.filter('politic');
});
$('#btn2').click(function (e) { 
    e.preventDefault();
    shuffleInstance.filter('sport');
});
$('#btn3').click(function (e) { 
    e.preventDefault();
    shuffleInstance.filter(Shuffle.ALL_ITEMS);
});

  });