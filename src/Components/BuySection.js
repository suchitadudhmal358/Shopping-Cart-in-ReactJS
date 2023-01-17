import React, { useState, useEffect } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";
import CardItem from "./CardItem";

const apiKey = "563492ad6f917000010000012111ffd97e2744938e519ed473b43aa9";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=";

const BuySection = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    const { photos } = data;
    console.log(photos);

    const allProducts = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      ProductName: faker.random.word(),
      ProductPrice: faker.commerce.price(),
      id: faker.datatype.uuid(),
    }));
    console.log(allProducts);
    setProduct(allProducts);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((pro) => (
          <Col key={pro.id} md={4}>
            <CardItem product={pro} addInCart={addInCart} />
          </Col>
        ))}

        {/* <img src={product[0].smallImage} alt="" /> */}
      </Row>
    </Container>
  );
};

export default BuySection;
