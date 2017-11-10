import styled from "styled-components";

const Container = styled.div`
  width: 976px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justify ? props.justify : "space-between"};
  align-items: ${props => (props.align ? props.align : "flex-start")};
`;

const Column = styled.div`
  box-sizing: border-box;
  padding: 0px 8px;
  flex-basis: ${props => (props.size ? props.size / 12 * 100 : "8.33333333")}%;
`;

const Offset = styled(Column)``;

const Img = styled.img`
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
`;

const Link = styled.a`
  box-sizing: border-box;
  color: ${props => (props.color ? props.color : "inherit")};
  text-align: center;
  text-decoration: none;
  font-family: "Circular_Air-Book";
  font-size: 14px;
  line-height: 24px;
`;

const Hr = styled.hr`
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)}px;
  border: 0;
  height: 1px;
  background: #484848;
  opacity: 0.25;
`;

const CardGroupRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h1`
  font: bold 32px/34px "Circular_Air-Bold";
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Review = styled.div`
  font: normal 12px/14px Circular_Air-Book;
  text-align: left;
`;

export {
  Container,
  Row,
  Column,
  Offset,
  Img,
  Link,
  Hr,
  CardGroupRow,
  Title,
  Reviews,
  Review
};
