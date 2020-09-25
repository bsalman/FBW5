import React from 'react'
import {connect} from 'react-redux'
import{selectImage} from '../actions/index'
import{nextAction} from '../actions'


class ShowImages extends React.Component{
    constructor(props){
        super(props)
        this.ulRef= React.createRef()
    }

    onSelectImdBtnClick=(image)=>{
        this.props.selectImage(image)
    }

    render(){
        console.log(this.props.images);

        let imageElement= this.props.images.map((image,idx)=>{
            return(
                <li key={idx} className="list-group-item">
              <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                <div className="media-body order-2 order-lg-1">
                  <h5 className="mt-0 font-weight-bold mb-2">Photographer: {image.user} </h5>
                  <p className="font-italic text-muted mb-0 small">Tags: {image.tags} </p>
                  <div className="d-flex align-items-center justify-content-between mt-1">
                    {/* <a href={image.largeImageURL} className="btn btn-primary" target="_blank">show Large Image</a> */}
                    <button className="btn btn-primary" onClick={()=>{this.onSelectImdBtnClick(image)}}>Show large Image</button>
                  </div>
                </div><img
                  src={image.previewURL}
                  alt="Generic placeholder image"
                  width="200"
                  className="ml-lg-5 order-1 order-lg-2"/>
              </div>
            </li>
            )
           
           
            
        })

        return(
        <div className="col-md-12">
            <ul className="list-group shadow mb-3">
            {imageElement}
             </ul>
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state);
    return ({
        images:state.images
    })
}
export default connect(mapStateToProps,{selectImage,nextAction})(ShowImages)