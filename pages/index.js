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
import DashboardSection from "../components/Common/DashboardSection";
import AcceleratedBySection from "../components/Common/AcceleratedBySection";
import TecnopucSection from "../components/Common/TecnopucSection";
import AmchamSection from "../components/Common/AmchamSection";

class Index extends Component {
  render() {
    return (
      <>
        {/* <InDevelopment /> */}
        <Navbar />
        <Banner />
        <DashboardSection />
        <FeaturedSolutions />
        <FunFacts />
        <AcceleratedBySection />
        <Press />
        <TecnopucSection />
        <AmchamSection />
        {/* <Clients /> */}
        <FreeTrial />
        <Footer />
      </>
    );
  }
}

export default Index;
