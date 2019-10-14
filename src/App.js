import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import tulogo from './pic/tulogo.png';
import { Button, Header, Image, Modal } from 'semantic-ui-react'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header as='h2'>
          <Image circular src={tulogo}  /> 
        </Header>
        <p>
          TU open house map
        </p>
      </header>

      <body className="App-body">
      <Modal trigger={<Button size='massive'  color='black'>Faculty 1</Button>}>
          <Modal.Header>Map</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>description</Header>
              <p>
                hmmm hmmmm hmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
              </p>
              <p></p>
              </Modal.Description>
            </Modal.Content>
          </Modal>

      <Modal trigger={<Button size='massive' >Faculty 2</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your e-mail
                address.
              </p>
              <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>

          
      
      

         
      </body>
    </div>
  );
}

export default App;
