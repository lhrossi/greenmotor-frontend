import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import FeaturedSolutions from "../components/HomeEight/FeaturedSolutions";
import FunFacts from "../components/Common/FunFacts";
import FreeTrial from "../components/HomeEight/FreeTrial";
import Footer from "../components/Layout/Footer";
import Clients from "../components/HomeEight/Clients";
import Banner from "../components/HomeSeven/Banner";
import Press from "../components/Common/Press";
import InDevelopment from "../components/Common/InDevelopment";

class Index extends Component {
  render() {
    return (
      <>
        <InDevelopment />
        {/* <Navbar />
        <Banner />
        <FeaturedSolutions />
        <FunFacts />
        <Press />
        <Clients />
        <FreeTrial />
        <Footer /> */}
      </>
    );
  }
}

export default Index;
