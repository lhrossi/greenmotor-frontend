import Image from 'next/image'
import React from 'react'
import WhatsappLogo from '../../images/whatsapp.png'

const Whatsapp = () => {
    return (
        <Image src={WhatsappLogo} className="custom-scroll-to-top" />
    )
}

export default Whatsapp