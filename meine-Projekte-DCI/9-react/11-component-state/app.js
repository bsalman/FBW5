import React from 'react';//mandatory
import ReactDOM from "react-dom";
import TimeComponent from './components/time';
// import getPosition from './services/geolocation';
import ShowPosition from './components/ShowPosition';

//==============functional component=========//
// const App = () => {
//     // git hte position of user fierst callback to position , second to error
//     let lat =''
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>{console.log(position);
//             lat = position.coords.latitude} ,
//         (error)=>{console.log(error);})
//     return (
//       <div >
//         lat:{lat}
//       </div>
  
//     )
  
//   }
//================class component=============//
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={ lat:null,time:null,error:null}
       
                    
    }
    //==============this is method best place to getting data live cikle methods =================//
    // componentDidMount(){
        // console.log('this component is mounted');
        // window.navigator.geolocation.getCurrentPosition(
        //     (position)=>{console.log(position);
        //     this.setState({lat: position.coords.latitude}) 
        //      } ,
        //      (error)=>{
        //          console.log(error);
        //          this.setState({error:error.message})
        //         })

        // getPosition().then(position=>{
        //     this.setState({lat: position.coords.latitude})
        // }).catch(error=>{
        //     this.setState({error:error.message})
        // })

    // }
    // //
    // componentDidUpdate(){}
    // //
    // componentWillUnmount(){}
   
    render(){ 
        return (
                  <div >
                  <ShowPosition/>
                <TimeComponent/>
               </div> 

               
               
               )
               }
       
}
  ReactDOM.render(
    <App/>, document.querySelector('#container'))