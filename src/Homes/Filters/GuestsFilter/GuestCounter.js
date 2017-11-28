import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import minus from "./minus.svg";
import plus from "./plus.svg";

const Wrapper = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  
  @media (min-width: 768px) {
  margin-bottom: 24px;
  }
`;
const Content = styled.div`
    display: flex:
    flow-direction: column;
    width: 192px;
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
`;
const Action = styled.img`
  width: 32px;
  height: 32px;
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
                </Content>
                <Actions>
                    <Action src={minus} onClick={this.props.onRemove}/>
                    <Count>{this.props.count}</Count>
                    <Action src={plus} onClick={this.props.onAdd}/>
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
