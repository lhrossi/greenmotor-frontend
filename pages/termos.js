import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import TermsAndConditionsContent from '../components/TermsAndConditions/TermsAndConditionsContent';
import Footer from '../components/Layout/Footer';

class Termos extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Terms And Conditions" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Terms And Conditions" 
                />

                <TermsAndConditionsContent />
                
                <Footer/>
            </>
        );
    }
}

export default Termos;