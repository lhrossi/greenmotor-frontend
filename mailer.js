const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
const senderMail = process.env.NEXT_PUBLIC_SENDGRID_MAIL_ADDRESS

const transporter = nodemailer.createTransport(sgTransport({
    auth: {
        // Update your sendgrid API key here 
        api_key: apiKey
    }
}))

const send = ({ name, email, phone, subject, text }) => {
    console.log('Api key mailer:', apiKey)
    console.log('Sender mail:', senderMail)

    const textBody = `Nome: ${name}   
                Assunto: ${subject}             
                Email: ${email}
                Telefone: ${phone}
                Mensagem: ${text}
                `

    const from = name && email ? `${name} <${email}>` : `${name || email}`

    const message = {
        from: senderMail,
        // Update your email here
        to: email,
        subject: subject,
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

module.exports = send;