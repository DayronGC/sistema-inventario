const db = require("../config/db");


const Producto = {

    getAll: (callback) => {
        db.query(`
            SELECT p.id, p.nombre, p.precio, p.stock,
                   c.nombre AS categoria
            FROM productos p
            JOIN categorias c ON p.categoria_id = c.id
        `, callback);
    },

    create: (data, callback) => {
        db.query(
            "INSERT INTO productos(nombre, precio, stock, categoria_id) VALUES (?,?,?,?)",
            [data.nombre, data.precio, data.stock, data.categoria_id],
            callback
        );
    },

    update: (id, data, callback) => {
        db.query(
            "UPDATE productos SET nombre=?, precio=?, stock=?, categoria_id=? WHERE id=?",
            [data.nombre, data.precio, data.stock, data.categoria_id, id],
            callback
        );
    },

    delete: (id, callback) => {
        db.query("DELETE FROM productos WHERE id=?", [id], callback);
    }
};

module.exports = Producto;