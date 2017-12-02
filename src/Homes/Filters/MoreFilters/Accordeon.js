import React from "react";
import TypeCheckbox from "../TypeCheckbox";
import arrow from "./arrow.svg";
import styled from "styled-components";

const AccordeonHeader = styled.div`
  font: normal 18px/21px Circular_Air-Book;
  color: #383838;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SeeAllLink = styled.a`
    color: #0F7276;
    font: normal 14px/16px Circular_Air-Book;
    display: flex;
    align-items: baseline;
    &:after {
        content: url("${arrow}");
        transform: rotate(${props => (props.isOpened ? 180 : 0)}deg);
        margin-left: 4px;
        display: flex;
        align-items: center;
    }
    
    @media(min-width: 768px) {
      display: none;
    }
`;

const SeeAllElementsLink = styled(SeeAllLink)`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

export default class extends React.Component {
  state = {
    isShow: false
  };

  toggle = () => {
    this.setState({
      isShow: !this.state.isShow
    });
  };

  renderAccordeonBody(isShow) {
    const filtersMap = this.props.content;
    const filterName = this.props.filterName;
    if (window.innerWidth >= 768) {
      const keys = Object.keys(filtersMap);
      return keys.map(key => {
        const filterValues = filtersMap[key];
        const isShown = keys.indexOf(key) < 4;
        return (
          (isShown || isShow) && (
            <TypeCheckbox
              isActive={filterValues.value}
              inlineMode={true}
              title={filterValues.name}
              onChange={this.props.onChange.bind(this, filterName, key)}
            />
          )
        );
      });
    }

    return Object.keys(filtersMap).map(key => {
      const filterValues = filtersMap[key];
      return (
        isShow && (
          <TypeCheckbox
            isActive={filterValues.value}
            inlineMode={true}
            title={filterValues.name}
            onChange={this.props.onChange.bind(this, filterName, key)}
          />
        )
      );
    });
  }

  render() {
    const { isShow } = this.state;

    const titleInLowerCase = this.props.title.toLowerCase();

    return (
      <div>
        <AccordeonHeader>
          {this.props.title}{" "}
          <SeeAllLink isOpened={isShow} onClick={this.toggle}>
            {isShow ? "Hide all" : "See all"}
          </SeeAllLink>
        </AccordeonHeader>
        {this.renderAccordeonBody(isShow)}
        <SeeAllElementsLink isOpened={isShow} onClick={this.toggle}>
          {isShow ? "Hide all" : "See all"} {titleInLowerCase}
        </SeeAllElementsLink>
      </div>
    );
  }
}
