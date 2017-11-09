import React from 'react';
import styled from 'styled-components';
import Rating from '../commons/rating';
import { Img } from '../commons/styled';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  background: #ffffff;
`;

const Title = styled.div`
  font-weight: bold;
  line-height: normal;
  margin: 8px 0px 6px;
  font-size: 15px;
  color: #383838;
`;

const Reviews = styled.div`
  font-family: Circular;
  line-height: normal;
  font-size: 12px;
  text-align: center;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CardSubTitle = styled.div`
  font-family: Circular;
  margin-bottom: 6px;
  line-height: normal;
  font-size: 12px;
  text-align: center;
`;

export default function(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} />
      <Title>
        ${props.price} {props.title}
      </Title>
      <CardSubTitle>
        {props.type} · {props.beds} beds
      </CardSubTitle>
      <ReviewsContainer>
        <Rating />
        <Reviews>{props.reviews} · Superhost</Reviews>
      </ReviewsContainer>
    </Container>
  );
}
