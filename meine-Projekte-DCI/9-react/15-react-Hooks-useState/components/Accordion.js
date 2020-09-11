import React,{useState} from 'react'
//useState is one of the hooks to use state in functional component
// const useState =React.useState


const Accordion = ({items}) => {
   // const activeState=useState{null}
// let index=activeState[0]
// let setIndex=activeState[1]

//index is the state property what we want to saved ,setIndex is the method which we will used to change index ,null the entail value of index
const[index,setIndex]=useState(null) //called arry destructor

const onTitleClick=(idx)=>{
    console.log(idx+'title is clicked');

    setIndex(index)
}


    // console.log(items);
const itemElement=items.map((item,idx)=>{
    return(
        <div key={idx} className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
             onClick={()=>{onTitleClick(idx)}}
             >
              {item.title}
            </button>
          </h2>
        </div>
        <div className={`collapse ${index===idx? 'show':''}`}>
          <div className="card-body">
           {item.content}
          </div>
        </div>
      </div>
    )
})

  return (
      <div className= "row">
    <div className="accordion" id="accordionExample">
    {itemElement}
      
    </div>
</div>
  )
}
export default Accordion