import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoDiaCinza from '../../images/mercadoDiaLogo.png';
import LogoMagmaxxCinza from '../../images/mercadoMagmaxxLogo.png';
import LogoCentershopCinza from '../../images/centershopLogo.png'

class Clients extends Component {
    render() {
        return (
            <>
                <section className="partner-area ptb-100 bg-gray">
                    <div className="container">
                        <div className="section-title">
                            <h2 className='text-color-black'>Nossos parceiros</h2>
                            <p className='text-color-black'>Supermercados que já estão utilizando nossa tecnologia para redução de desperdícios.</p>
                        </div>

                        <div className="row align-items-center col-lg-12">
                            <div className='custom-partner-item'>
                                <Image src={LogoCentershopCinza} alt="Logo CenterShop" className='' />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Clients;