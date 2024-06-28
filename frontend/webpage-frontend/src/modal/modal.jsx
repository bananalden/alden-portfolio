import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';


function modalPreview (mod) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
    <>
<Button variant="primary"  onClick={handleShow}>
    Preview
  </Button>


  <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mod.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Carousel variant="dark" fade>
      <Carousel.Item>
        <img className='imageCarousel' src={mod.carImage1} alt="" />
        <Carousel.Caption>
          <p>{mod.carCap1}.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imageCarousel' src={mod.carImage2} alt="" />
        <Carousel.Caption>
          <p>{mod.carCap2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imageCarousel' src={mod.carImage3} alt="" />
        <Carousel.Caption>
          <p>
          {mod.carCap3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            <p>{mod.bigDesc}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</>
);

}

export default modalPreview;