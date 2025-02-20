var express = require('express');
var router = express.Router();
const sendEmail = require('../javascripts/form'); 

/* GET form page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Formulario' });
});

/* POST form submission. */
router.post('/', function(req, res, next) {
    const { name, email, message } = req.body;

    sendEmail(name, email, message, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo.');
        } else {
            console.log('Correo enviado: ' + info);
            res.status(200).send('Correo enviado exitosamente.');
        }
    });
});

module.exports = router;
