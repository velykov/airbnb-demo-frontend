import React from "react";
import styled from "styled-components";
import Rating from "../commons/rating";
import { Img, Reviews, Review } from "../commons/styled";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  background: #ffffff;
`;

const Title = styled.div`
  font: bold 15px/18px Circular_Air-Bold;
  margin: 8px 0px 6px;
`;

const Description = styled.div`
  font: lighter 15px/18px Circular_Air-Light;
  margin-bottom: 6px;
  text-align: left;
`;

export default function(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} />
      <Title>
        ${props.price} {props.title}
      </Title>
      <Description>
        {props.type} · {props.beds}
      </Description>
      <Reviews>
        <Rating />
        <Review>{props.reviews} · Superhost</Review>
      </Reviews>
    </Container>
  );
}
