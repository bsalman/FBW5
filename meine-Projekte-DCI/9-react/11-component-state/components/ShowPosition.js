import React from 'react';//mandatory
import getPosition from '../services/geolocation';

class ShowPosition extends React.Component{
    state={lat:null,error:null}
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

    render(){ 

            if(this.state.lat===null && this.state.error===null){
                return(
                    <div>
                        loading...
                    </div>
                    
                )
            }
            if(this.state.lat===null && this.state.error!==null){
                return(
                    <div>error:{this.state.error}</div>
                    
                )
            }
            if(this.state.lat!==null && this.state.error===null){
                return(
                    <div> your latitude is :{this.state.lat}  </div>
                    
                )
            }

      
   
    }
   
}

export default ShowPosition;