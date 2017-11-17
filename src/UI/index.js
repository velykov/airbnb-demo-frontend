import { Col } from "react-flexbox-grid";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 320px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 966px) {
    width: 966px;
  }
`;

export const Img = styled.img`
  object-fit: fill;
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
`;

export const Link = styled.a`
  box-sizing: border-box;
  color: ${props => (props.color ? props.color : "inherit")};
  text-align: center;
  text-decoration: none;
  font-family: "Circular_Air-Book";
  font-size: 14px;
  line-height: 24px;
`;

export const Section = styled.section`
  @media (min-width: 320px) {
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const SectionTitle = styled.h2`
  @media (min-width: 320px) {
    font: bold 24px/28px Circular_Air-Bold;
    margin: 0 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  @media (min-width: 768px) {
    font: bold 32px/34px Circular_Air-Bold;
    margin: 0 0 24px;
  }
`;

export const Reviews = styled.div`
  display: flex;
  flex-direction: row;
  align-items: bottom;
`;

export const Review = styled.div`
  font: normal 12px/14px Circular_Air-Book;
  text-align: left;
  paddin-left: 4px;
`;

export const Slider = styled.div`
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

export const Slide = styled(Col)`
  flex: 0 0 1;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const CardImg = styled(Img)`
  @media (min-width: 320px) {
    margin-bottom: 8px;
  }
`;

export const CardTitle = styled.h4`
  @media (min-width: 320px) {
    font: bold 13px/15px Circular_Air-Bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: ${props =>
      props.marginBottom ? `${props.marginBottom}px` : 0};
  }

  @media (min-width: 768px) {
    font: bold 15px/18px Circular_Air-Bold;
    text-overflow: 0;
    white-space: 0;
    overflow: 0;
  }
`;

export const CardTitleDescription = styled.span`
  @media (min-width: 320px) {
    font: normal 13px/15px Circular_Air-Light;
  }

  @media (min-width: 768px) {
    font: lighter 15px/18px Circular_Air-Light;
  }
`;