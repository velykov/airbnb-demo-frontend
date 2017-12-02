import React from "react";
import Rating from "../../UI/Rating";
import {
  Card,
  CardImg,
  CardTitle,
  CardTitleDescription,
  Reviews,
  Review
} from "../../UI";

export default function(props) {
  return (
    <Card>
      <CardImg src={props.img} alt={props.alt} width="100%" />
      <CardTitle marginBottom={7}>
        ${props.price}{" "}
        <CardTitleDescription>{props.title}</CardTitleDescription>
      </CardTitle>
      <Reviews>
        <Rating />
        <Review>{props.reviews} reviews</Review>
      </Reviews>
    </Card>
  );
}
