import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ContentWrapper } from "../UI";
import DatesFilter from "./DatesFilter";
import styled from "styled-components";

const Button = styled.button`
  font: normal 14px/16px Circular_Air-Book;
  color: #383838;
  text-align: left;
  padding: 7px 16px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  background-color: transparent;
  margin-right: 12px;

  @media (min-width: 320px) {
    display: ${props => (props.lgShow ? "none" : "inline-block")};
  }

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

const Aside = styled.aside`
  padding: 12px 0;
  box-shadow: 0 0.5px rgba(72, 72, 72, 0.3);
  position: fixed;
  top: 80px;
  width: 100%;
  background-color: #fff;
  z-index: 200;
`;

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDates: false
    };

    this.handleDatesClick = this.handleDatesClick.bind(this);
  }

  handleDatesClick() {
    this.setState(prevState => ({
      isShowDates: !prevState.isShowDates
    }));
  }

  render() {
    return (
      <Aside>
        <ContentWrapper>
          <Grid>
            <Row>
              <Col xs={12}>
                <DatesFilter onClose={this.handleDatesClick} />
                <Button>Guests</Button>
                <Button lgShow={true}>RoomType</Button>
                <Button lgShow={true}>Price</Button>
                <Button lgShow={true}>Instant book</Button>
                <Button>More filters</Button>
              </Col>
            </Row>
          </Grid>
        </ContentWrapper>
      </Aside>
    );
  }
}
