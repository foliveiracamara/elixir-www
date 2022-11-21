const nodemailer = require('nodemailer');
const { host, user } = require('./config/smtp');

const SMTP_CONFIG = require("./config/smtp")

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass
    },
    tls: {
        rejectUnauthorized: false,
    },
})


async function run(){
    const mailSent = await transporter.sendMail({
        text: 'Texto do email',
        subject: 'Assunto do email',
        from: 'Elixir <jogueinobigode@gmail.com>',
        to: ['jogueinobigode@gmail.com','jogueino@gmail.com']
    })
    console.log(mailSent)
}
