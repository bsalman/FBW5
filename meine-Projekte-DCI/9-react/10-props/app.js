import React from 'react';//mandatory
import ReactDOM from "react-dom";
import Comment from './components/Comments';
import ApprovalCard from './components/approvalCards';



const App = () => {

  return (
    <div className="ui container comments">
      <ApprovalCard>
        I am a new card
      </ApprovalCard>
      <ApprovalCard>
      <Comment text="nice comment"  rate="5" starColor="red"/>
      </ApprovalCard>
      <Comment text="nice comment"  rate="5" starColor="red"/>
      <Comment text="I like it "  rate="4" starColor="yalow"/>
      <Comment text="Not so bade"  rate="2" starColor="green"/>
      <Comment text="you are in harry"  rate="1" starColor="blue"/>
      </div>

  )

}
ReactDOM.render(
  <App/>, document.querySelector('#container'))