import React from 'react'
import Image from 'next/image';
import sebraeLogo from '../../images/sebraeLogo.png'
import sebraeLogoColor from '../../images/sebraeLogoColor.png'
import amanhaLogo from '../../images/amanhaLogo.png'

const AcceleratedBySection = () => {
    return (
        <>
            <section className="partner-area ptb-100 bg-black">
                <div className="container">
                    <div className="section-title">
                        <h2 className='text-color-white'>Greenmotor na mídia</h2>
                    </div>

                    <div className="row align-items-center col-lg-12">
                        <div className='custom-partner-item'>
                            <a href='https://digital.sebraers.com.br/blog/15-startups-gauchas-para-ficar-de-olho-em-2022/' target="_blank">
                                <Image src={sebraeLogoColor} alt="Logo do Sebrae que leva à notícia da Greenmotor" className='' />
                            </a>
                        </div>
                        <div className='custom-partner-item'>
                            <a href='https://amanha.com.br/categoria/empreendedorismo/banrisul-vai-acelerar-30-startups-de-seis-estados-ate-setembro' target="_blank">
                                <Image src={amanhaLogo} alt="Logo do Sebrae que leva à notícia da Greenmotor" className='' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AcceleratedBySection