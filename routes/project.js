var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {  // Aquí está la ruta configurada como '/'
  res.render('project', { title: 'Proyectos' });
});

module.exports = router;
