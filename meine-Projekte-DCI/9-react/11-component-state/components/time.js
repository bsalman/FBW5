import React from 'react';//mandatory

class TimeComponent extends React.Component{
    state={time:null} 
    constructor(props){
        super(props)
        //this.state={time:null}               
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({time:new Date().toLocaleTimeString()}),1000
        }) 
    }
    render(){ return(
        <div> now the time is : {this.state.time}</div>
    )
   
    }
}

export default TimeComponent;