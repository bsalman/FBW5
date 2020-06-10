window.onload = function() {
    let grayScaleBtn =document.querySelector('#grayScaleBtn')
    let orgenalBtn = document.querySelector('#orgenalBtn')
    let invertBtn = document.querySelector('#invertBtn')
    let removRedBtn= document.querySelector('#removRedBtn')
    let greenToGrayBtn =document.querySelector('#greenToGrayBtn')
    let effect1 = document.querySelector('#effect1')



    let canv =document.querySelector('#canv')
    let ctx = canv.getContext('2d')
    let img = document.createElement('img')
    img.src ='./img/dices.png'
    img.onload = ()=> {
        ctx.drawImage(img,0,0,500,500)
       
    }


    grayScaleBtn.onclick = () =>{
        let imgData= ctx.getImageData(0,0,500,500)
        console.log(imgData.data);
        console.log(imgData.data[4]);

        for (let i = 0; i < imgData.data.length; i+=4) {
            let avg= ( imgData.data[i]+ imgData.data[i+1]+ imgData.data[i+2])/3
            imgData.data[i]=avg //red
            imgData.data[i+1]=avg //green
            imgData.data[i+2]=avg // blue
              
		
        }
        ctx.putImageData(imgData,0,0)

    }
    orgenalBtn.onclick= ()=>{
        ctx.clearRect(0,0,500,500)
        ctx.drawImage(img,0,0,500,500)

    }
    invertBtn.onclick =()=>{
        const imgData =ctx.getImageData(0,0,500,500)
        for (let i = 0; i < imgData.data.length; i+=4) {
            imgData.data[i]= 255-imgData.data[i]
            imgData.data[i+1]= 255-imgData.data[i+1]
            imgData.data[i+2]=255-imgData.data[i+2]
            
        }
        ctx.clearRect(0,0,500,500)
        ctx.putImageData(imgData,0,0)
    }

    removRedBtn.onclick =()=>{
        const imgData =ctx.getImageData(0,0,500,500)
        for (let i = 0; i < imgData.data.length; i+=4) {
           if(imgData.data[i] > imgData.data[i+1]&& imgData.data[i] > imgData.data[i+2] ){
             imgData.data[i+3] = 0
           }

          
            
        }
        ctx.clearRect(0,0,500,500)
        ctx.putImageData(imgData,0,0)

    }

    greenToGrayBtn.onclick =()=>{
        const imgData =ctx.getImageData(0,0,500,500)
        for (let i = 0; i < imgData.data.length; i+=4) {
            let avg =( imgData.data[i]+ imgData.data[i+1]+ imgData.data[i+2])/3
           if(imgData.data[i+1]-5 > imgData.data[i]&& imgData.data[i+1]-5 > imgData.data[i+2] ){
            imgData.data[i]=avg 
            imgData.data[i+1]=avg 
            imgData.data[i+2]=avg
           }
        }
        ctx.clearRect(0,0,500,500)
        ctx.putImageData(imgData,0,0)

    }
    effect1.onclick = ()=>{
       
        
        let img1 = document.createElement('img')
        img1.src ='./img/red-smoke.png'
        img1.onload = ()=> {
            ctx.drawImage(img1,0,0,500,500)
           
        }
        const imgData1 =ctx.getImageData(0,0,500,500)
         for (let i = 0; i < imgData1.data.length; i+=4) {
            //   if (data[i+3] !=0) {

            //     data[i] = r;
            //     data[i + 1] = g;
            //     data[i + 2] = b;
            //     data[i + 3] = data[i + 3];}
            data[i+3]=(1)
              }
              ctx.putImageData(imgData,0,0)

    } 


}