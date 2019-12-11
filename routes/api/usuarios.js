var express = require('express');
var router = express.Router();

const Usuario = require('../../models/usuario');


router.post('/', async (req, res) => {
    const result = await Usuario.insert(req.body);
    // console.log(req.body)
    res.json(result)

    // if (result['affectedRows'] === 1) {
    //     const usuario = await Usuario.getById(result['insertId']);
    //     res.json(usuario)
    // } else {
    //     res.json({ error: 'Error en la insercion del Usuario' })
    // };
});


module.exports = router;