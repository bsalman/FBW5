window.onload=()=>{
    const container =document.querySelector('#container')
const img =document.querySelector('#container>img')
    let zoom =1
    container.addEventListener('mousewheel',function (e) {
        // console.log(e);
        if (e.deltaY >0) {
            zoom += 0.1
        }else{
            if (zoom>0.2) {

                 zoom -= 0.1
            } 
                
            
           
        }
        img.style.transform = 'scale('+zoom+')'
    })
}