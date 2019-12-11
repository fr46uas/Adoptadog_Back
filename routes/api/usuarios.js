var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');

const Usuario = require('../../models/usuario');


router.post('/', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const result = await Usuario.insert(req.body);
    res.json(result)

    // if (result['affectedRows'] === 1) {
    //     const usuario = await Usuario.getById(result['insertId']);
    //     res.json(usuario)
    // } else {
    //     res.json({ error: 'Error en la insercion del Usuario' })
    // };
});


module.exports = router;