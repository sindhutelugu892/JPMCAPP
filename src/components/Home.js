
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Home(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        
               
          <div className="container mx-auto">
            <p classNameName='display-1 text-center text-info'>Welcome to home page</p>
            <div class="row row-cols-1 row-cols-md-3 ">
  <div class="col">
    <div class="card shadow ">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  
       
        
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} className='mt-5 pt-5'>
        <Modal.Header closeButton>
          <Modal.Title>TELUGU SINDHU</Modal.Title>
        </Modal.Header>
        <Modal.Body>can code in c++,just now learning front end,not even know about backend Nature is defined as our environment. 
          It is the interaction between the physical world around us and the life within it like the atmosphere, climate, natural 
          resources, ecosystem, flora, fauna and humans. Nature also includes non-living things such as water, mountains, landscape, 
          plants, trees and other things.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
 
        </div>
      </div>
        
    )
}


export default Home
