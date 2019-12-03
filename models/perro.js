

const getAll = () => {

    return new Promise((resolve, reject) => {
        db.query('select * from perros', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getSearch = (values) => {

    let query = "select * from perros where 1=1";
    let qValues = [];



    if (values.raza) {
        query += " and raza = ?";
        qValues.push(values.raza);
    };
    if (values.color) {
        query += " and color=?";
        qValues.push(values.color)
    };
    if (values.tamano) {
        query += " and tamano=?";
        qValues.push(values.tamano);
    };
    if (values.sexo) {
        query += " and sexo=?";
        qValues.push(values.sexo)
    };
    if (values.perrera) {
        query += " and fk_perrera=?";
        qValues.push(values.perrera);
    };

    return new Promise((resolve, reject) => {
        db.query(query, qValues, (err, rows) => {
            console.log(rows)

            if (err) reject(err);
            resolve(rows)
        })

        console.log(query);
        console.log(qValues);
    });

};

const getById = (pPerroId) => {

    return new Promise((resolve, reject) => {
        db.query('select * from perros where id=?', [pPerroId], (err, rows) => {
            if (err) reject(err);
            if (rows.length == 1) {
                resolve(rows[0]);
            } else {
                reject('Perro no encontrado');
            }
        });
    });
};


const getByPerreras = (pPerreraId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM perros WHERE fk_perrera=?', [pPerreraId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};


const getByRaza = (pPerroRaza) => {

    return new Promise((resolve, reject) => {
        db.query('select distinct (raza) from perros', [pPerroRaza], (err, rows) => {
            if (err) reject(err);
            resolve(rows);

        });
    });
};


const getByColor = (pPerroColor) => {

    return new Promise((resolve, reject) => {
        db.query('select distinct (color) from perros', [pPerroColor], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};


const getBySize = (pPerroTamano) => {

    return new Promise((resolve, reject) => {
        db.query('select distinct (tamano) from perros', [pPerroTamano], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getBySexo = (pPerroSexo) => {

    return new Promise((resolve, reject) => {
        db.query('select distinct (sexo) from perros', [pPerroSexo], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};



module.exports = {
    getAll: getAll,
    getById: getById,
    getByPerreras: getByPerreras,
    getByRaza: getByRaza,
    getByColor: getByColor,
    getBySize: getBySize,
    getBySexo: getBySexo,
    getSearch: getSearch

}