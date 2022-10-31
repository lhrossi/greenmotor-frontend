import React, { Component } from 'react';
import Image from 'next/image';
import eduImage from '../../images/eduPhoto.png';
import nichoImage from '../../images/nichoPhoto.png';
import rodrigoImage from '../../images/rodrigoPhoto.png';
import luizImage from '../../images/luizPhoto.png';
import guiImage from '../../images/guilhermeGarciaImage.png';
import leoImage from '../../images/leonardoAmadoImage.png';
import pedraoImage from '../../images/pauloBrossardImage.png';
import ricardoImage from '../../images/ricardoMeloImage.png';
import lealImage from '../../images/rodrigoLealImage.png';
import camilaImage from '../../images/camilaBernardesImage.png';

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
                                    <h2 className='text-color-white'>Founder &amp; CEO</h2>
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
                                    <h2 className='text-color-white'>Co-Founder &amp; CFO</h2>
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
                            <h2 className='text-color-white'>Conselho de Administração</h2>
                        </div>
                        <div className='flex-about-us'>
                            <div className="col-lg-6 col-md-12">
                                <div className='sobre-nos-2-col'>
                                    <Image width={195} height={195} src={lealImage} alt="Foto do advisor Rodrigo Leal" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>RODRIGO <br />LEAL</h1>
                                    <br />
                                    <h2 className='text-color-white'>Empreendedor &amp; Investidor</h2>
                                    <br />
                                    <p className='text-color-white'>Sócio-fundador da Zenvia Mobile e atual Head da Wisidea e NAVI AI New Ventures.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className='sobre-nos-2-col'>
                                    <Image width={195} height={195} src={ricardoImage} alt="Foto do advisor Ricardo Melo Bastos" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>RICARDO <br />MELO BASTOS</h1>
                                    <br />
                                    <h2 className='text-color-white'>Inovação &amp; Gestão</h2>
                                    <br />
                                    <p className='text-color-white'>Doutor em Ciência da Computação pela UFRGS. Diretor de Novos Negócios do Instituto Ceos. Pesquisador em Engenharia de Software e Consultor de Projetos de Ciência, Tecnologia e Inovação.</p>
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
                            <div className="col-lg-6 col-md-12">
                                <div className='sobre-nos-2-col'>
                                    <Image width={195} height={195} src={nichoImage} alt="Foto do fundador Eduardo Kautz" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>NICHOLAS <br />KLUGE CORRÊA</h1>
                                    <br />
                                    <h2 className='text-color-white'>AI Developer</h2>
                                    <br />                                    
                                    <p className='text-color-white'>Mestre em Engenharia Elétrica pela PUC-RS. Candidato a Ph.D pela PUC-RS e Rheinische Friedrich-Wilhelms-Universität Bonn (Alemanha).  Pesquisador na área de Machine Learning (ML) com foco em Ética, Fairness, Explainability, e Adversarial ML. Presidente da AI Robotics Ethics Society na PUC-RS.</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className='sobre-nos-2-col'>
                                    <Image width={195} height={195} src={leoImage} alt="Foto do fundador Eduardo Kautz" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>LEONARDO <br />ROSA AMADO</h1>
                                    <br />
                                    <h2 className='text-color-white'>AI Developer</h2>
                                    <br />
                                    <p className='text-color-white'>Doutor em Ciência da Computação pela PUC-RS. Pesquisador de pós-doutorado no centro de ciência de dados da PUCRS. Pesquisador ativo em Machine Learning, Automated Planning e Reinforcement Learning.</p>
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
                            <h2 className='text-color-white'>Equipe</h2>
                        </div>
                        <div className='flex-about-us'>
                            <div className="col-lg-3 col-md-12">
                                <div className='sobre-nos'>
                                    <Image width={195} height={195} src={guiImage} alt="Foto" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>GUILHERME <br />FERNANDES GARCIA</h1>
                                    <br />
                                    <h2 className='text-color-white'>Product Owner</h2>
                                    <br />
                                    <p className='text-color-white'>Graduado em Administração de Empresas pela PUCRS com mais de três anos de experiência em ambientes de inovação. Possui habilidades complementares em UX (Digital House) e Scrum. Cursando Análise e Desenvolvimento de Sistemas no SENAC.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12">
                                <div className='sobre-nos'>
                                    <Image width={195} height={195} src={camilaImage} alt="Foto" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>CAMILA <br />FERRAZ BERNARDES</h1>
                                    <br />
                                    <h2 className='text-color-white'>Customer Success</h2>
                                    <br />
                                    <p className='text-color-white'>Estudante de Publicidade e Propaganda na PUCRS. Experiência com produção de eventos e atendimento ao cliente. Mais de 2 anos atuando em comunicação no ramo do varejo.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12">
                                <div className='sobre-nos'>
                                    <Image width={195} height={195} src={pedraoImage} alt="Foto" className='founder-image-padding' />
                                    <br />
                                    <h1 className='text-color-white text-margin-top'>PAULO <br />BROSSARD</h1>
                                    <br />
                                    <h2 className='text-color-white'>Backend Developer</h2>
                                    <br />
                                    <p className='text-color-white'>Ciência da Computação na PUCRS. Iniciação científica no Virtual Humans Laboratory, PUCRS.</p>
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