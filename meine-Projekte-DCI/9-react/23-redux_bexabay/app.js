import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import SearchBar from './components/SearchBar'
import ImageDetails from './components/ImageDetails'
import ShowImages from './components/ShowImages'
import reducers from './reducers/index'


class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                <SearchBar/>
                <ShowImages/>
                <ImageDetails/>
                </div>
                
            </div>
        )
    }
}
ReactDOM.render( <Provider store={createStore(reducers)}>
    <App/>
</Provider>
,document.querySelector('#container'))