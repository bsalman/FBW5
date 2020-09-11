import React,{useRef,useEffect} from 'react'

const ShowImages =(props)=>{
    // constructor(props){
    //     super(props)
 const   ulRef= useRef()
    // }
    //detect if we arrived to the end of ul 
 const checkScroll=()=>{
    //  console.log('I am scrolling');
    //  console.log('this is window inner Height:',window.innerHeight);
    //  console.log('this is ul bottom',this.ulRef.current.getBoundingClientRect().bottom);
     if(ulRef.current.getBoundingClientRect().bottom<=window.innerHeight){
         console.log('reach the end');
         props.runNext()
         document.removeEventListener('scroll',checkScroll)
     }
 }
// componentDidMount(){
    
//         document.addEventListener('scroll',checkScroll)
    
// }
 useEffect(()=>{  
  document.addEventListener('scroll',checkScroll)
//clean up function we use it like componentWillUnmount() 
  return ()=>{
  document.removeEventListener('scroll',checkScroll)
    }


})
// componentDidUpdate(){
   
//         document.addEventListener('scroll',checkScroll)
    
// }
// componentWillUnmount(){
//     document.removeEventListener('scroll',checkScroll)
// }
// componentDidUpdate(){
//     document.removeEventListener('scroll',this.checkScroll)
// }
//gxs

     const imagesElement=props.images.map((image,idx)=>{ return(
     
        < li key={idx} className="list-group-item">
     <div className="media align-items-lg-center flex-column flex-lg-row p-3">
       <div className="media-body order-2 order-lg-1">
         <h5 className="mt-0 font-weight-bold mb-2">Fotografer:{image.user}</h5>
         <p className="font-italic text-muted mb-0 small">Tags:{image.tags}</p>
         <div className="d-flex align-items-center justify-content-between mt-1">
           <a href={image.largeImageURL} className="btn btn-primary" target="blank">Show large Image</a>
           <ul className="list-inline small">
             <li className="list-inline-item m-0">
               <i className="fa fa-star text-success"></i>
             </li>
             <li className="list-inline-item m-0">
               <i className="fa fa-star text-success"></i>
             </li>
             <li className="list-inline-item m-0">
               <i className="fa fa-star text-success"></i>
             </li>
             <li className="list-inline-item m-0">
               <i className="fa fa-star text-success"></i>
             </li>
             <li className="list-inline-item m-0">
               <i className="fa fa-star-o text-gray"></i>
             </li>
           </ul>
         </div>
       </div><img
         src={image.previewURL}
         alt="Generic placeholder image"
         width="200"
         className="ml-lg-5 order-1 order-lg-2"/>
     </div>
   </li>
  

)})
return(
    <ul ref={ulRef} className="list-group shadow mb-3">
        {imagesElement}
    </ul>
)
    


}

export default ShowImages