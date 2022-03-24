import React from 'react'
import Image from 'next/image';
import sebraeLogo from '../../images/sebraeLogo.png'

const Press = () => {
    return (
        <>
            <section className="partner-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2 className='text-color-black'>Greenmotor na mídia</h2>
                    </div>

                    <div className="row align-items-center col-lg-12">
                        <div className='custom-partner-item'>
                            <a href='https://digital.sebraers.com.br/blog/15-startups-gauchas-para-ficar-de-olho-em-2022/' target="_blank">
                                <Image src={sebraeLogo} alt="Logo do Sebrae que leva à notícia da Greenmotor" className='' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Press