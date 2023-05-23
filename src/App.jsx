import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Navbar from "./components/Navbar"
import { calculateTotals } from "./features/cart/cartSlice";



function App() {

  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
