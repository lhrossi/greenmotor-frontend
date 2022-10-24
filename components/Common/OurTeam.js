import React, { Component } from 'react';
import Image from 'next/image';
import eduImage from '../../images/eduPhoto.png';
import nichoImage from '../../images/nichoPhoto.png';
import rodrigoImage from '../../images/rodrigoPhoto.png';
import luizImage from '../../images/luizPhoto.png';
import azimutImage from '../../images/azimutPhoto.png';
import playDeliveryImage from '../../images/playDeliveryPhoto.png';
import cognitivaPhoto from '../../images/cognitivaPhoto.png';
import starLearningPhoto from '../../images/starLearningPhoto.png';
import crescendoLogo from '../../images/crescendoLogo.png';

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
                            <h2 className='text-color-white'>C-Levels</h2>
                        </div>
                        <div className='flex-about-us'>
                            <div className="col-lg-3 col-md-12">
                                <div className='sobre-nos padding-alligner'>
                                    <Image width={200} height={200} src={eduImage} alt="Foto do fundador Eduardo Kautz"/>
                                    <br />
                                    <br />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>EDU <br /> KAUTZ</h1>
                                    <br />
                                    <h2 className='text-color-white'>Founder & CEO</h2>
                                    <br />
                                    <p className='text-color-white'>Fundador e sócio da Play Delivery, plataforma digital de intermediação em entregas que está em mais de 130 cidades no Brasil, com mais de 100 mil entregadores cadastrados e mais de 7 milhões de entregas realizadas.</p>
                                    <Image src={playDeliveryImage} alt="Logo da PlayDelivery" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className='sobre-nos'>
                                    <Image src={rodrigoImage} alt="Foto do co-fundador Rodrigo Villa" />
                                    <h1 className='text-color-white text-margin-top' >RODRIGO VILLA REAL</h1>
                                    <br />
                                    <h2 className='text-color-white'>Co-Founder & CFO</h2>
                                    <br />
                                    <p className='text-color-white'>Oito anos de experiência no mercado financeiro, com passagem pelo Banco Renner, Azimut Wealth Management e Crescendo Group. Especialista em Wealth Management. Relaciona-se e investe no ecossistema de startups há três anos.</p>
                                    <Image src={azimutImage} alt="Logo da Azimut" />
                                    <Image src={crescendoLogo} alt="Logo da Azimut" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className='sobre-nos'>
                                    <Image src={luizImage} alt="Foto do CTO Luiz Rossi" />
                                    <h1 className='text-color-white text-margin-top' >LUIZ LONGHI ROSSI</h1>
                                    <br />
                                    <h2 className='text-color-white'>CTO</h2>
                                    <br />
                                    <p className='text-color-white'>Doutor em Computação pela UFRGS, CEO da Cognitiva Brasil (vencedora do SEBRAE-RS Digital 2019, finalista do Finep Startup 2018), CTO da StarLearning (4ª colocada no BRDE Labs 2020).</p>
                                    <Image src={starLearningPhoto} alt="Logo da Azimut" />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-area ptb-100 pb-70 pt-0 bg-black">
                    <div className="container">
                        <div className="section-title sobre-nos center-everything">
                            <br />
                            <br />
                            <br />
                            <h2 className='text-color-white'>Conselho de Tecnologia</h2>
                        </div>
                        <div className='flex-about-us'>
                            <div className="col-lg-3 col-md-12">
                                <div className='sobre-nos'>
                                    <Image width={195} height={195} src={nichoImage} alt="Foto do fundador Eduardo Kautz" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>NICHOLAS <br />KLUGE CORRÊA</h1>
                                    <br />
                                    <p className='text-color-white'>Mestre em Engenharia Elétrica pela PUC-RS. Candidato a Ph.D pela PUC-RS e Rheinische Friedrich-Wilhelms-Universität Bonn (Alemanha).  Pesquisador na área de Machine Learning (ML) com foco em Ética, Fairness, Explainability, e Adversarial ML. Presidente da AI Robotics Ethics Society na PUC-RS.</p>
                                    {/* <Image src={playDeliveryImage} alt="Logo da PlayDelivery" /> */}
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