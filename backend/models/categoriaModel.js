const db = require("../config/db");

const Categoria = {

    getAll: (callback) => {
        db.query("SELECT * FROM categorias", callback);
    },

    create: (data, callback) => {
        db.query(
            "INSERT INTO categorias(nombre, descripcion) VALUES (?,?)",
            [data.nombre, data.descripcion],
            callback
        );
    },

    update: (id, data, callback) => {
        db.query(
            "UPDATE categorias SET nombre=?, descripcion=? WHERE id=?",
            [data.nombre, data.descripcion, id],
            callback
        );
    },

    delete: (id, callback) => {
        db.query("DELETE FROM categorias WHERE id=?", [id], callback);
    }
};

module.exports = Categoria;