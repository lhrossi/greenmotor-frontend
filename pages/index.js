import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeEight/BannerSlider';
import FeaturedSolutions from '../components/HomeEight/FeaturedSolutions';
import FunFacts from '../components/Common/FunFacts';
import FreeTrial from '../components/HomeEight/FreeTrial';
import Footer from '../components/Layout/Footer';
import Clients from '../components/HomeEight/Clients';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <BannerSlider />
                <FeaturedSolutions />
                <FunFacts />
                <Clients />
                <FreeTrial />
                <Footer/> 
            </>
        );
    }
}

export default Index;