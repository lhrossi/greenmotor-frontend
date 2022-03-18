import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeEight/BannerSlider';
import FeaturedSolutions from '../components/HomeEight/FeaturedSolutions';
import FunFacts from '../components/Common/FunFacts';
import FreeTrial from '../components/HomeEight/FreeTrial';
import Footer from '../components/Layout/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <BannerSlider />
                <FeaturedSolutions />
                <FunFacts />
                <FreeTrial />
                <Footer/> 
            </>
        );
    }
}

export default Index;