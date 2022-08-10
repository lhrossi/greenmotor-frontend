import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Footer from '../components/Layout/Footer';

class Contato extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ContactForm />
                <Footer />
            </>
        );
    }
}

export default Contato;