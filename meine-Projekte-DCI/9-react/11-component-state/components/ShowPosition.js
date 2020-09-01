import React from 'react';//mandatory
import getPosition from '../services/geolocation';

class ShowPosition extends React.Component{
    state={lat:null}
    constructor(props){
        super(props)
        //this.state={time:null}               
    }


    componentDidMount(){
        getPosition().then(position=>{
            this.setState({lat: position.coords.latitude})
        }).catch(error=>{
            this.setState({error:error.message})
        })
    }

    render(){ return(
        <div>
            <div> your latitude is :{this.state.lat}  </div> 
        <div>error:{this.state.error}</div>
        </div>
        
    )
   
    }
   
}

export default ShowPosition;