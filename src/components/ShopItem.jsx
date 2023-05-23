import { Button, Card } from "react-bootstrap";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "../utilities/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice"



export function ShopItem({ id, name, price, imgUrl }) {
  const dispatch = useDispatch()
  const item = useSelector(store => store.cart.cart.find(item => item.id === id));
  let quantity
  if (item) {
    quantity = item.quantity
  } else {
    quantity = 0
  }
  // const quantity = 0;
  // console.log("quantity", item.quantity)
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=> dispatch(addToCart({id, name, imgUrl, price} ))}>+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
