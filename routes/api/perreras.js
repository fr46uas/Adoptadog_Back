var express = require('express');
var router = express.Router();

const Perrera = require('../../models/perrera');

//GET http://localhost:3000/api/perreras
router.get('/', async (req, res) => {
    const rows = await Perrera.getAll();
    res.json(rows);
});



module.exports = router;