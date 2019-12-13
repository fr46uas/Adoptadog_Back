const insert = ({ nombre, apellidos, email, password, direccion, codigo_postal, localidad, provincia, telefono }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios (nombre, apellidos, email, password, direccion, codigo_postal, localidad, provincia, telefono) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, email, password, direccion, codigo_postal, localidad, provincia, telefono], (err, result) => {
            if (err) reject(err)
            resolve(result);
        });
    });
};

const insertPost = ({ usuario, titulo, mensaje, fecha }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into post (usuario, titulo, mensaje, fecha) values (?, ? , ?, ?)', [usuario, titulo, mensaje, fecha], (err, result) => {
            if (err) reject(err)
            resolve(result);
        })
    })
}

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

const getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where email = ?', [pEmail], (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        });
    })
}

module.exports = {
    insert: insert,
    getById: getById,
    getByEmail: getByEmail,
    insertPost: insertPost
}