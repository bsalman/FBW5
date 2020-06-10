window.onload= function () {
    const container = document.querySelector('#container')
    const par =document.querySelector('#container>p')
    let fontSize =16
    //assign wheel to container
    container.addEventListener('wheel',function (e) {
        // console.log(e);
        // console.log(e.deltaY);
        if (e.deltaY>0) {
            fontSize++ 
        }else{
            if (fontSize>0) {
                 fontSize--
            }
           
        }
        console.log(fontSize);
        
      

        par.style.fontSize = fontSize + 'px'
        

        
    })
    

}

// window.addEventListener('scroll',function(){
//     var scrolled = window.scrollY / ( document.getElementById("Table_01").offsetHeight );
//     console.log("window.scrollY: " + window.scrollY);
//     console.log("scrolled: " + scrolled );
//     var zoomLevels = 1; //change to have a different behavior
//     var scale = Math.pow( 3, scrolled * zoomLevels);
//     var images = document.getElementById("Table_01").getElementsByTagName("img");
//     console.log("scale:" + scale);
//     for(i=0;i<images.length;i++){
//         images[i].width = Math.round(500/scale); //change 500 to your image size
//         images[i].height = Math.round(500/scale); //change 500 to your image size
//     }
// },true);