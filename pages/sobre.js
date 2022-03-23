import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import WhyChooseUs from '../components/About/WhyChooseUs';
import OurTeam from '../components/Common/OurTeam';
import Footer from '../components/Layout/Footer';
import FreeTrial from '../components/HomeEight/FreeTrial';

class Sobre extends Component {
    render() {
        return (
            <>
                <Navbar />
                <WhyChooseUs />
                <OurTeam />
                <FreeTrial />
                <Footer />
            </>
        );
    }
}

export default Sobre;