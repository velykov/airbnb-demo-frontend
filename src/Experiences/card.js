import React from "react";
import styled from "styled-components";
import Rating from "../commons/rating";
import { Img } from "../commons/styled";

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  background: #fff;
`;

const Title = styled.span`
  margin: 8px 0px 6px;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Reviews = styled.div`
  font-family: Circular;
  font-style: Book;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  color: #383838;
`;

const Price = styled.span`
  font-weight: bold;
`;

export default function(props) {
  return (
    <Card>
      <Img src={props.img} alt={props.alt} width="100%" />
      <Title>
        <Price>${props.price}</Price> {props.title}
      </Title>
      <ReviewsContainer>
        <Rating>
          <Rating />
        </Rating>
        <Reviews>{props.reviews} reviews</Reviews>
      </ReviewsContainer>
    </Card>
  );
}
