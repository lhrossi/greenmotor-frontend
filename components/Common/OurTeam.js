import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import eduImage from '../../images/eduPhoto.png';
import rodrigoImage from '../../images/rodrigoPhoto.png';
import azimutImage from '../../images/azimutPhoto.png';
import playDeliveryImage from '../../images/playDeliveryPhoto.png';
import crescendoImage from '../../images/crescendoLogo.png';

class OurTeam extends Component {
    render() {
        return (
            <>
                <section className="team-area ptb-100 pb-70 pt-0 bg-black">
                    <div className="container">
                        <div className="section-title sobre-nos center-everything">
                            <br />
                            <br />
                            <br />
                            <h2 className='text-color-white'>Sobre os Founders</h2>
                        </div>
                        <div className='flex-about-us'>
                            <div className="col-lg-6 col-md-12">
                                <div className='sobre-nos'>
                                    <br />
                                    <Image src={eduImage} alt="Foto do fundador Eduardo Kautz" className='founder-image-padding' />
                                    <h1 className='text-color-white text-margin-top'>EDU KAUTZ</h1>
                                    <br />
                                    <h2 className='text-color-white'>Founder & CEO</h2>
                                    <br />
                                    <p className='text-color-white'>Fundador e sócio da Play Delivery, plataforma digital de intermediação em entregas que está em mais de 130 cidades no Brasil, com mais de 100 mil entregadores cadastrados e mais de 7 milhões de entregas realizadas.</p>
                                    <Image src={playDeliveryImage} alt="Logo da PlayDelivery" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className='sobre-nos'>
                                    <br />
                                    <Image src={rodrigoImage} alt="Foto do co-fundador Rodrigo Villa" />
                                    <h1 className='text-color-white text-margin-top' >RODRIGO VILLA REAL</h1>
                                    <br />
                                    <h2 className='text-color-white'>Co-founder & CFO</h2>
                                    <br />
                                    <p className='text-color-white'>Oito anos de experiência no mercado financeiro, com passagem pelo Banco Renner, Azimut Wealth Management e Crescendo Group. Especialista em Wealth Management. Relaciona-se e investe no ecossistema de startups há três anos.</p>
                                    <Image src={azimutImage} alt="Logo da Azimut" />
                                    <Image src={crescendoImage} alt="Logo da Crescendo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default OurTeam;