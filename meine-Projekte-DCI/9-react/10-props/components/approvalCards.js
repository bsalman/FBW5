
import React from 'react';
import faker from 'faker';
const ApprovalCard= (props)=>{
  return(
    <div className="ui card">
    <div className="content">
    <img className="right floated mini ui image" src={faker.image.avatar()}/>
      <div className="header">
        {faker.name.findName()}
      </div>
      <div className="meta">
        Friends of {faker.name.findName()}
      </div>
      <div className="description">
        {props.children}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  )
}
export default ApprovalCard 