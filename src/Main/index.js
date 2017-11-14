import React from "react";
import MainHeader from "./MainHeader";
import Footer from "../Footer";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import { ContentWrapper } from "../UI";

export default () => {
  return (
    <ContentWrapper>
      <MainHeader />
      <main>
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </main>
      <Footer />
    </ContentWrapper>
  );
};
