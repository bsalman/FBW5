import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import Oclock from './components/Oclock'
import getImages from './services/pixabay'
import ShowImages from './components/ShowImages'
class App extends React.Component{
    constructor(props){
        super(props)
        this.spinnerRef=React.createRef()
    }
    state = {totalImages: null, imagesList: []}
    search = (searchWord,color) => {
        this.spinnerRef.current.classList.add('active')
        console.log(searchWord);
        // search proccess
        getImages(searchWord,color).then(data => {
            console.log(data);
            this.spinnerRef.current.classList.remove('active')
            this.setState({totalImages: data.total, imagesList: [...data.hits]})
        }).catch(error => {
            console.log(error);
            this.spinnerRef.current.classList.remove('active')
        })
    }
    render(){
        // let foundMessage = ''
        // if (this.state.totalImages != null) {
        //     foundMessage = 'Found: ' + this.state.totalImages + ' Images'
        // }
        return(
            <div className="ui segment">
                <Oclock />
                <SearchBar text="Enter Search word" runSearch={this.search}  />

                {/* {foundMessage} */}
                {this.state.totalImages != null ? 'Found: ' + this.state.totalImages + ' Images' : ''}
                <ShowImages images={this.state.imagesList} />
                
                <div ref={this.spinnerRef} className="ui dimmer">
                <div className="ui text loader">Loading</div>
                </div>
  

            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#container'))