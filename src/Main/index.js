import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Reservations from "./Reservations";
import Destinations from "./Destinations";
import { Hr } from "../UI";

export default () => {
  return (
    <div>
      <Header />
      <Hr marginTop={16} marginBottom={16} />
      <main>
        <Explore />
        <Experiences />
        <Homes />
        <Reservations />
        <Destinations />
      </main>
      <Footer />
    </div>
  );
};
