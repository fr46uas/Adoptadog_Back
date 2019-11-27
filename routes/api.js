var express = require('express');
var router = express.Router()

const apiPerrosRouter = require('./api/perros');
const apiPerrerasRouter = require('./api/perreras');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/perros', apiPerrosRouter);
router.use('/perreras', apiPerrerasRouter);
router.use('/usuarios', apiUsuariosRouter);
module.exports = router;