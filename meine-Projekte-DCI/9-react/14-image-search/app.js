import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/searchBar'
import getIData from './services/pixabay'
import ShowImages from './components/showImages'

class App extends React.Component{
     state={
         results:[],
         searchWord:'',
         pageNum:1,
         perPage:4,
         color:''
     }
    search=(keyWord,color)=>{
        if (keyWord) {
            getIData(keyWord,4,1).then(data=>{
                console.log(data);
                this.setState({
                    results:[...data.hits],
                    searchWord:keyWord,
                    pageNum:1,
                    perPage:4})
            })
            
        }else{
            this.setState({results:[]})
        }
    }

    goNext=()=>{
            getIData(this.state.searchWord,this.state.perPage,this.state.pageNum+1).then(data=>{
                this.setState({
                    pageNum:this.state.pageNum+1,
                    results:[...this.state.results,...data.hits]
                })
            })              
    }
    render(){
        return(
            <div className="container">
                <SearchBar runSearch={this.search} />
               {this.state.results.length?<ShowImages  images={this.state.results} runNext={this.goNext}/>:''}
                
            </div>
           
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))