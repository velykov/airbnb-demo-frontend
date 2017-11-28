import React from 'react';
import Filter from "./Filter";
import Rheostat from 'rheostat';
import filters from "../constants";
import styled from "styled-components";
import "./slider.css";

const Title = styled.div`
    color: #383838;
    font: lighter 16px/19px Circular_Air-Light;
`;

const Description = styled.div`
    color: #383838;
    font: lighter 12px/14px Circular_Air-Light;
`;

export default class extends React.Component {
    state = {
        startPrice: this.props.startPrice,
        endPrice: this.props.endPrice,
    };

    handleApply = () => {
        this.props.onApply(this.state);
        this.handleToggle();
    };

    handleReset = () => {
        this.setState({
            startPrice: this.props.min,
            endPrice: this.props.max
        });
    };

    handleCancel = () => {
        this.setState({
            startPrice: this.props.startPrice,
            endPrice: this.props.endPrice
        });
        this.handleToggle();
    };

    handleToggle = () => {
        this.props.onToggle(filters.price);
    };

    getLabel = () => {
        const min = this.props.min;
        const max = this.props.max;
        const state = this.state;
        if (state.startPrice > min || state.endPrice < max) return `${state.startPrice} - ${state.endPrice}`;
        if (state.startPrice > min) return `${state.startPrice}+`;
        if (state.endPrice < max) return `Up to ${state.endPrice}`;
        return 'Price';
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
            >
                <Title>$10 — $1000+</Title>
                <Description>The average nightly price is $75.</Description>
                <Rheostat
                    min={this.props.min}
                    max={this.props.max}
                    values={[0, 100]}
                    // pitComponent={<img src={pit} />}
                    // onChange
                />
            </Filter>
        );
    }
}