import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import getProducts from './services/getProducts'
import ShowProducts from './components/ShowProducts'

class App extends React.Component{
    state = {
        searchWord: null,
        perPage: 5,
        pageNum: 1,
        searchResult: [] 
    }
    search = (keyWord) => {
        if(keyWord) {
            getProducts(keyWord, this.state.perPage, this.state.pageNum).then(data => {
                console.log(data);
                this.setState({searchWord: keyWord, searchResult: [ ...data.results[0].hits ]})
            })
        }
    }
    onMoreBtnClick = () => {
        if(this.state.searchWord) {
            getProducts(this.state.searchWord, this.state.perPage, this.state.pageNum + 1).then(data => {
                console.log(data);
                this.setState({ searchResult: [...this.state.searchResult, ...data.results[0].hits ], pageNum: this.state.pageNum + 1})
            })
        }
    }
    
    render(){
        return(
            <div className="container">
            
            <SearchBar runSearch={this.search}/>
            <ShowProducts hits={this.state.searchResult} goNext={this.onMoreBtnClick}/>
            {/* <button className="btn btn-success" onClick={this.onMoreBtnClick}>view more</button> */}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))