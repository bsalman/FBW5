import React from 'react'
import getIData from '../services/pixabay'
import {connect} from 'react-redux'
import {setImages} from '../actions'

class SearchBar extends React.Component {
  state = {
    searchWord: ''
  }
  onSearchInpChange = (e) => {
    this.setState({searchWord: e.target.value})
  }
  onClickBtn = () => {
    getIData(this.state.searchWord, 10, 1).then(data => {
      console.log(data);
      this
        .props
        .setImages(data.hits)
    })
  }
  render() {
    return (
      <div className="col-md-12 ml-3">

        <div className="input-group mb-3  ">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              onClick={this.onClickBtn}
              type="button">Search</button>
          </div>
          <input
          
            type="text"
            className="form-control"
            placeholder="Search Word"
            value={this.state.searchWord}
            onChange={this.onSearchInpChange}/>
        </div>
      </div>

    )
  }
}
// state heir is not the state which belong to class this is the maineState
const mapStateToProps = (state) => {
  console.log(state);
  return ({images: state.images})
}
export default connect(mapStateToProps, {setImages})(SearchBar)