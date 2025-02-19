const nodemailer = require('nodemailer');

const sendEmail = (name, email, message, callback) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rmartinez30.01.98@gmail.com',  //coreo que envía el email
            pass: 'cblq cnmt hrce gbjb',  // Contraseña de aplicación generada en Google
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: email,  // Correo del remitente (usuario que completa el formulario)
        to: 'roomartinez988@gmail.com',  // Acá llegan los emails
        subject: `Nuevo mensaje de ${name}`,
        text: `Email de remitente: ${email}\n\nMensaje: ${message}`,  
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, info.response);
        }
    });
};

module.exports = sendEmail;