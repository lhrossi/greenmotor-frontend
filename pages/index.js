import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import FeaturedSolutions from "../components/HomeEight/FeaturedSolutions";
import FunFacts from "../components/Common/FunFacts";
import VideoSection from "../components/Common/VideoSection";
import FreeTrial from "../components/HomeEight/FreeTrial";
import Footer from "../components/Layout/Footer";
import Banner from "../components/HomeSeven/Banner";
import Press from "../components/Common/Press";
import DashboardSection from "../components/Common/DashboardSection";
import AcceleratedBySection from "../components/Common/AcceleratedBySection";
import TecnopucSection from "../components/Common/TecnopucSection";
import AmchamSection from "../components/Common/AmchamSection";

class Index extends Component {
  render() {
    return (
      <>
        <Navbar repphone='555198668926'/>
        <Banner repphone='555198668926'/>
        <DashboardSection />
        <Press />
        <AcceleratedBySection />
        <TecnopucSection />
        {/* <AmchamSection /> */}
        <VideoSection />
        <FeaturedSolutions />
        <FunFacts />
        <FreeTrial repphone='555198668926'/>
        <Footer repphone='555198668926'/>
      </>
    );
  }
}

export default Index;
