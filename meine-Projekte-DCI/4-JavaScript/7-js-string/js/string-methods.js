// let x = "Hallo World"
// let len = x.length
// console.log(len)

// let idx = x.indexOf("l")
// console.log(idx)

// let lidx = x.lastIndexOf("l")
// console.log(lidx)


function indexfinder(text,chr,start){
    
         if (start< text.length){
             let x=text.indexOf(chr,start)
             if(x!=-1){
                console.log (x)
                indexfinder(text,chr,x+1)
             }

         }
      
    

}
  indexfinder("Hakona matata","t",0)

  