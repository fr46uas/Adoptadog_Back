const insert = ({ nombre, apellidos, email, password, repeat_password, direccion, codigo_postal, localidad, provincia, telefono }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre, apellidos, email, password, repeat_password, direccion, codigo_postal, localidad, provincia, telefono) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, email, password, repeat_password, direccion, codigo_postal, localidad, provincia, telefono], (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

const getById = (pUsuarioId) => {
    return new Promise((resolve, reject) => {

        db.query('select * from usuarios where id = ?', [pUsuarioId], (err, rows) => {
            if (err) reject(err)
            if (rows.length == 1) {
                resolve(rows[0])
            } else {
                reject('Usuario no encontrado')
            }
        });
    });
}

module.exports = {
    insert: insert,
    getById: getById
}