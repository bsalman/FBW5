import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component{
render(){
    return (<div>Hi I am a comoponent
            <Title title={'I am Title'} content={'I am content'} />
            <Title title={'I am Title1'} content={'I am content1'} />
            <Title title={'I am Title1'} content={'I am content1'} />
    </div>
    )
}
}

class Title extends React.Component{
    render(){
        return (
            <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.content}</p>
        <User fname={'Ahmad'} lname={'Osman'} />
        </div>
    )
    }
}

class User extends React.Component{
    constructor(props){
        super(props)
        this.fullName = this.props.fname + ' ' + this.props.lname
        this.staticValue = 'I am static'
    }
    render(){
    return <h2>{this.fullName} <span> {this.staticValue}</span></h2>
    }
}

ReactDOM.render(<Main />, document.querySelector('#container'))