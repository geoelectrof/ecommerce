// import { Offcanvas } from "react-bootstrap"

// const ShoppingCart = () => {
//   return (
//     <Offcanvas show={true}>
//         <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Cart</Offcanvas.Title>
//         </Offcanvas.Header>
//     </Offcanvas>>
//   )
// }

// export default ShoppingCart
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const ShoppingCart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShoppingCart;
