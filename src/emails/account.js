const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you can get along with the app`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'Sorry to see you go',
        text: `We are sorry to see you go, ${name}. Could you tell us why you cancelled?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}