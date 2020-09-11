import React from 'react'

class SearchBar extends React.Component {
    state={searchWord:''}
    //this component will re-render the page 
    onSearchInputChange=(e)=>{
        this.setState({searchWord:e.target.value})
        
    }
    onSearchBtn=()=>{
        this.props.runSearch(this.state.searchWord)
    }
    

    //this lifecycle method show all the changes after the re_rendering 
    // componentDidUpdate(){
    //     console.log(this.state.searchWord);
    // }
  render() {
    return (
    <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={this.onSearchBtn}>Search</button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type something to search"
            value={this.state.searchWord}
            onChange={this.onSearchInputChange}/>
            <br/>
            
            <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Choose Color
              </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                 </div>
</div>
            
        </div>
    </div>)
    }}

    export  default SearchBar