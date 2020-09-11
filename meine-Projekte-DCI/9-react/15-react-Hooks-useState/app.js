import React from 'react'
import ReactDOM from 'react-dom'
import Accordion from './components/Accordion'
const items=[
    {title:'What is React?',
    content:'React is a front end javascript Framework'},
    {title:'Why use React?',
    content:'React is a front end javascript Framework'},
    {title:'How to use React?',
    content:'you will know now how it is work'}

]
const App =()=>{
    console.log();
    return(
        <div className="container">
            <Accordion items={items}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#container'))