import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
            {mod.bigDesc}
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