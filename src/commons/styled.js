import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Img = styled.img`
  object-fit: cover;
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

const SectionTitle = styled.h2`
  @media (min-width: 320px) {
    font: bold 24px/28px "Circular_Air-Bold";
  }
  @media (min-width: 768px) {
    font: bold 32px/34px "Circular_Air-Bold";
  }
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

const Slider = styled.div`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled(Col)`
  flex: 0 0 1;
`;

export { Slider, Slide, Img, Link, Hr, SectionTitle, Reviews, Review };
