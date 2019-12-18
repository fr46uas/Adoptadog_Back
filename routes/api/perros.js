var express = require('express');
var router = express.Router();

const Perro = require('../../models/perro');

//GET http://localhost:3000/api/perros
router.get('/', async (req, res) => {
    const rows = await Perro.getAll();
    res.json(rows);
});

//POST http://localhost:3000/api/perros/buscar
router.post('/buscar', async (req, res) => {
    const results = await Perro.getSearch(req.body)
    res.json(results)

});

//GET http://localhost:3000/api/perros/raza
router.get('/raza', async (req, res) => {
    const rows = await Perro.getByRaza();
    res.json(rows);
});

//GET http://localhost:3000/api/perros/color
router.get('/color', async (req, res) => {
    const rows = await Perro.getByColor();
    res.json(rows);
});

//GET http://localhost:3000/api/perros/tamano
router.get('/tamano', async (req, res) => {
    const rows = await Perro.getBySize();
    res.json(rows);
});

//GET http://localhost:3000/api/perros/sexo
router.get('/sexo', async (req, res) => {
    const rows = await Perro.getBySexo();
    res.json(rows);
});


module.exports = router;