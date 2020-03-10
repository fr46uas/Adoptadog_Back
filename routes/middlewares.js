const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    //     //COMPRUEBO SI LA CABECERA ESTA INCLUIDA EN LA PETICION
    if (!req.headers['user-token']) {
        return res.json({ error: 'Tienes que incluir la cabecera user-token' })
    }

    const token = req.headers['user-token'];
    let payload = null;
    try {
        payload = jwt.decode(token, process.env.TOKEN_KEY);
    } catch (err) {
        return res.json({ error: 'El token es invalido' })
    };

    if (moment().unix() > payload.expiresAt) {
        return res.json({ error: 'El token esta caducado. Pide otro' })
    }

    next();
};

module.exports = {
    checkToken: checkToken
}