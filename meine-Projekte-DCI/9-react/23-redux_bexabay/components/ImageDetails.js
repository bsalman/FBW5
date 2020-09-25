import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux'
import{selectImage} from '../actions'


class ImageDetails extends React.Component{
    constructor(props){
      super(props)
      this.ulRef=React.createRef
    }

    toggle=()=>{
        this.props.selectImage(null)
    }

     
    render(){
        if (this.props.selectedImage) {
            
       
        return(
            <div>
              
      <Modal isOpen={true} toggle={this.toggle} size="lg">
        <ModalHeader toggle={this.toggle}>{this.props.selectedImage.tags}</ModalHeader>
        <ModalBody>
          <img className="w-100" src={this.props.selectedImage.largeImageURL} />
          </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
            </div>
        )  }else{
            return null
        }
    }
}
const mapStateToProps=(state)=>{
   
    return ({
        selectedImage:state.selectedImage

    })
}
export default connect (mapStateToProps,{selectImage})(ImageDetails)