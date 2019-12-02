var express = require('express');
var router = express.Router();

const Perro = require('../../models/perro');

//GET http://localhost:3000/api/perros
router.get('/', async (req, res) => {
    const rows = await Perro.getAll();
    res.json(rows);
});



module.exports = router;