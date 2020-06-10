window.onload = function () {
    let obj = document.getElementById("div1")
console.log(obj.innerHTML)
obj.innerHTML = '<span style="font-size:70px">FBW5</span>'

let fbwDiv = document.getElementById('fbw')
for (let i = 100; i > 0; i--) {
    fbwDiv.innerHTML += '<span style="font-size:'+i+'px">FBW5</span><br>'
}

  }

