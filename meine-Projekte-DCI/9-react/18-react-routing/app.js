import React ,{useState}from 'react';
import ReactDOM from 'react-dom';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const  App=(props)=>{
    const {
        buttonLabel,
        className
      } = props
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);
    
        return(
            <div>
            <Button color="danger" onClick={toggle}>show modal</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Hi I am modal
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
      
        
    
}
ReactDOM.render(<App />, document.querySelector('#container'))