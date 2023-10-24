import nodemailer from "nodemailer"
import handlebars from "handlebars"
import fs from "fs"
import path from "path"

require('dotenv').config();



let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // this is the smtp host name acquired from your smpt provider
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

interface emailElement {
    to: string,
    subject: string
    templateVars: Object
}

export const sendMail = async (template: string, emailElement: emailElement) => {
    let source = fs.readFileSync(path.join(__dirname.split('dist')[0], `src/services/email/templates/${template}.hbs`), 'utf8');
    let compiledTemplate = handlebars.compile(source);

    let mailOptions = {
        from: `"${process.env.EMAIL_SENDER_NAME}" <${process.env.EMAIL_SENDER}>`,
        to: emailElement.to,
        subject: emailElement.subject,
        html: compiledTemplate({ support_email: process.env.EMAIL_SENDER, ...emailElement.templateVars })
    }

    transporter.sendMail(mailOptions)
}