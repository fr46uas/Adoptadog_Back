

const getAll = () => {

    return new Promise((resolve, reject) => {
        db.query('select * from perreras', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const getById = (pPerreraId) => {

    return new Promise((resolve, reject) => {
        db.query('select * from perros where id=?', [pPerreraId], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    getAll: getAll,
    getById: getById
}