import React,{useState} from 'react'

const SearchBar=(props)=> {
    const[searchWord,setSearchWord] = useState('')
    //this component will re-render the page 
    const onSearchInputChange=(e)=>{
      setSearchWord(e.target.value)
        
    }
    const  onSearchBtn=(e)=>{
       props.runSearch(searchWord)
    }
    

    //this lifecycle method show all the changes after the re_rendering 
    // componentDidUpdate(){
    //     console.log(this.state.searchWord);
    // }
  
    return (
    <div className="container">
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={onSearchBtn}>Search</button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type something to search"
            value={searchWord}
            onChange={onSearchInputChange}/>
          </div>
        </div>
        <div class="row">
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
      </div>
                 
            )
    }

    export  default SearchBar