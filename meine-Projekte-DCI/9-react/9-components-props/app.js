 import React from 'react';
 import ReactDOM from "react-dom"
  // this is function  component 
 const App =()=>{
    const text='Enter your name '
     return <div>
         <label htmlFor="name" className="label"> {text}</label>
         <br/>
         <input type='text' id="name" style={{backgroundColor:'blue',color:'white'}}></input>

     </div>
 }

// class  component 
// class App extends  React.Component{
// render(){
//     return <div> Hi there!</div>
// }
// }
 ReactDOM.render(<App/>,document.querySelector('#container'))