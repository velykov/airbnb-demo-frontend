import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import minus from "./minus.svg";
import plus from "./plus.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font: normal 18px/21px Circular_Air-Book;
  color: #383838;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const Description = styled.div`
  font: normal 14px/16px Circular_Air-Light;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 112px;
  position: absolute;
  right: 8px;

  @media (min-width: 768px) {
    right: 16px;
  }
`;
const Action = styled.button`
  width: 32px;
  height: 32px;
  background: url(${prop => prop.src}) transparent;
  appearance: none;
  border: none;
`;
const Count = styled.span`
  font: normal 18px/21px Circular_Air-Light;
  color: #383838;
`;

export default class GuestCounter extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
          {this.props.children}
        </Content>
        <Actions>
          <Action src={minus} onClick={this.props.onRemove} tabindex={1} />
          <Count>
            {this.props.count}
            {this.props.showPlus && this.props.count === 0 ? "+" : ""}
          </Count>
          <Action src={plus} onClick={this.props.onAdd} tabindex={2} />
        </Actions>
      </Wrapper>
    );
  }
}

GuestCounter.propTypes = {
  count: PropTypes.number,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func
};
