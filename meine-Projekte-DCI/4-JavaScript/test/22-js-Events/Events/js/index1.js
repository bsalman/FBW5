// let obj = {
//     title: "t",
//     name :"belal"
// }

//first Event is onload window
window.onload = function () {
    //anythig you put it will excuted arter the all document is loaded
    printBody();
}

function printBody(){
    console.log(document.body)
}

// the second importent Event click :)
function clickEventHandlerMostafa(params) {
    alert("done");
    console.log("done again")
    
}
// the forth imprtant Event double Click :)
function doubelClick() {
alert("double")
}
//the 5 imprtant Event  onmouseover
function onmouseOver() {
    console.log("mouse over")
    
}



//the6 imprtant Event onchange
function change() { console.log("changed!")
    
}

function keyPress(arg) {
    console.log(arg)
}

