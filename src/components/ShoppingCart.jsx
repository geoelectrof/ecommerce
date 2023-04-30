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
import { useDispatch, useSelector } from "react-redux";
import { openOffCanvas, closeOffCanvas } from "../features/offCanvas/offCanvasSlice";

const ShoppingCart = () => {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  const show = useSelector(state => state.offCanvas.open)

  return (
    <>
      <Button variant="primary" onClick={() => dispatch(openOffCanvas())}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={() => dispatch(closeOffCanvas())} placement="end">
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
