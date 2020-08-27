class MyDiv extends React.Component{
    render(){
        return (
            <div>
                {/* calling component in React */}
                <MySpan/>   
                <br/>
        <span>Hello world</span>
     
        </div>
        )
    }
}
class MySpan extends React.Component{
    render(){
        // in return we can render one parent element
        return <span> I am new span</span>
    }
}

ReactDOM.render(<MyDiv/>,document.querySelector('#container'))