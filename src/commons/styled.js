import styled from "styled-components";

const Container = styled.div`
  width: 976px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
`;

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #484848;
  opacity: 0.25;
  margin-top: ${props => (props.margin_top ? props.margin_top : 0)}px;
  margin-bottom: ${props => (props.margin_bottom ? props.margin_bottom : 0)}px;
`;

export { Container, Row, Column, Offset, Img, Link, Hr };
