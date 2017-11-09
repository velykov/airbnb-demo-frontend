import React from 'react';
import styled from 'styled-components';
import { Img } from '../commons/styled';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  flex-direction: column;
  background: #fff;
`;

const Category = styled.div`
  font-weight: bold;
  line-height: normal;
  margin: 8px 0 2px;
  font-size: 10px;
  text-transform: uppercase;
  color: #383838;
`;

const Title = styled.div`
  font-weight: bold;
  line-height: normal;
  margin: 0 0 4px;
  font-size: 18px;
  color: #383838;
`;

const Description = styled.div`
  font-family: Circular;
  margin-bottom: 6px;
  line-height: normal;
  font-size: 12px;
  text-align: center;
  font-size: 18px;

  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

export default function(props) {
  return (
    <Container>
      <Img src={props.img} alt={props.alt} />
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
      <Description>About ${props.price} per person</Description>
    </Container>
  );
}
