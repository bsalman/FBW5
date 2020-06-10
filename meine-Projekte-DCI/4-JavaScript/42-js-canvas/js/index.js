window.onload = function () {

    // get canvas element
    let canvas1 = document.querySelector('#canvas1')
    let context = canvas1.getContext("2d")
    context.fillStyle = "red"
    // draw rectangle 
    context.fillRect(200,50,50,100) // (position x, position y,width, height )

    // set canvas lines color
    context.strokeStyle = "blue"
    // draw empty rectangle
    context.strokeRect(150, 50, 50, 100)
    // draw line 
    // set start point
    context.moveTo(0,0) // (x, y)
    // draw a line
    context.lineTo(20, 20)// (x, y)
    context.lineTo(50, 20)// (x, y)
    context.lineTo(50, 100)// (x, y)
    context.lineTo(500, 20)// (x, y)
    // set new start for the line
    context.moveTo(50,10)
    context.lineTo(100, 20)

    
    // draw curve
    // if we did not set the new start point the start point gonna be
    // the last point that the context arrived to

    context.moveTo(200,200)
    context.quadraticCurveTo(200, 60, 120, 90) // (x curve , y curve, x , y)
    // x curve y curve for direction of the curve
    // x , y end point of the line 
    // draw text
    context.font = "30px Georgia"
    context.fillText("Hello World", 200, 100)
    // make all line visible
    context.stroke()

  }