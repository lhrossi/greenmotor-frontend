import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent';
import Footer from '../components/Layout/Footer';

class Privacidade extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Privacy Policy" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Privacy Policy" 
                />
                a
                <PrivacyPolicyContent />
                
                <Footer/>
            </>
        );
    }
}

export default Privacidade;