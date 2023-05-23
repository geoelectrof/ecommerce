import shopItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import { ShopItem } from "../components/ShopItem";

const Shop = () => {
  return (
    <>
      <div>Store</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {shopItems.map((item) => (
          <Col key={item.id}>
            <ShopItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Shop;
