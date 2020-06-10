let ourSells = [
    {month: 1, sells: 50000},
    {month: 2, sells: 20000},
    {month: 3, sells: 5000},
    {month: 4, sells: 100000},
    {month: 5, sells: 120000},
    {month: 6, sells: 1000},
    {month: 7, sells: 25000},
    {month: 8, sells: 12000},
    {month: 9, sells: 75000},
    {month: 10, sells: 3000},
    {month: 11, sells: 60000},
    {month: 12, sells: 0}
]

window.onload = function () {
    // get canvas
    // actual x size is 1 * 50
    // actual y  size 1 / 1000
    let chartCanvas = document.querySelector('#chartCanvas')
    let context = chartCanvas.getContext('2d')

    context.strokeStyle = 'black'
    let startY = 120
    let stepX = 50
    context.moveTo(
        0,
        startY - ( ourSells[0].sells / 1000)
    )
    context.fillText(1, 0, startY - ( ourSells[0].sells / 1000)+10)
    for(let i = 1 ; i < ourSells.length; i++){
        let pointY =startY - ( ourSells[i].sells / 1000)
        let pointX = i * stepX
        context.lineTo(pointX, pointY)
        context.fillText(i+1, pointX, pointY+10)
    }

    context.stroke()
    //context.moveTo(0, 120)
    // context.fillText("ja", 0, 120)
    // context.fillText("Fe", 50, 120)
    // context.fillText("Ma", 100, 120)

  }