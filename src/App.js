import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { Container, Col, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import BuySection from "./Components/BuySection";
import Cart from "./Components/Cart";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyPresent = cartItem.findIndex((array) => {
      return array.id === item.id;
    });

    if (isAlreadyPresent !== -1) {
      toast("Already added in  Cart", { type: "error" });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Complete ! ", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuySection addInCart={addInCart} />
        </Col>

        <Col md={4}>
          <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
