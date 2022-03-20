import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import FeaturedSolutions from '../components/HomeEight/FeaturedSolutions';
import FunFacts from '../components/Common/FunFacts';
import FreeTrial from '../components/HomeEight/FreeTrial';
import Footer from '../components/Layout/Footer';
import Clients from '../components/HomeEight/Clients';
import Banner from '../components/HomeSeven/Banner';


class Index extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <FeaturedSolutions />
                <FunFacts />
                {/* <Clients /> */}
                <FreeTrial />
                <Footer/> 
            </>
        );
    }
}

export default Index;