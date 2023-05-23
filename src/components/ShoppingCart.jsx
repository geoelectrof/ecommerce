import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { openOffCanvas, closeOffCanvas } from "../features/offCanvas/offCanvasSlice";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {


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
