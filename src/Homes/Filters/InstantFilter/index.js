import React from "react";
import Filter from "../Filter";
import filters from "../filterNames";
import Checkbox from "../Checkbox";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 24px 16px;
  width: calc(100% - 48px);
  position: relative;
`;

const Content = styled.div`
  width: 200px;
`;

const Title = styled.div`
  color: #383838;
  font: normal 18px/21px Circular_Air-Book;
  margin-bottom: 4px;
`;

const Description = styled.div`
  color: #383838;
  font: lighter 14px/16px Circular_Air-Light;
`;

export default class extends React.Component {
  state = {
    instantBook: this.props.instantBook
  };

  handleApply = () => {
    this.props.onApply(this.state);
    this.handleToggle();
  };

  handleCancel = () => {
    this.setState({
      instantBook: this.props.instantBook
    });
    this.handleToggle();
  };

  handleToggle = () => {
    this.props.onToggle(filters.instant);
  };

  getLabel = () => {
    return "Instant book";
  };

  render() {
    return (
      <Filter
        label={this.getLabel()}
        className={this.props.className}
        isShow={this.props.isShow}
        isSelected={this.props.isSelected}
        onToggle={this.handleToggle}
        onApply={this.handleApply.bind(this)}
        onReset={this.handleReset}
        onCancel={this.handleCancel.bind(this)}
        mdWidth={326}
        mdHeight={167}
      >
        <Wrapper>
          <Checkbox
            // title={this.getLabel()}
            // description="Listings you can book without waiting for host approval."
            onChange={() =>
              this.setState({
                instantBook: !this.state.instantBook
              })
            }
            isChecked={this.state.instantBook}
          >
            <Content>
              <Title>{this.getLabel()}</Title>
              <Description>
                Listings you can book without waiting for host approval.
              </Description>
            </Content>
          </Checkbox>
        </Wrapper>
      </Filter>
    );
  }
}
