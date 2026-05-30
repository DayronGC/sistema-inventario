const Producto = require("../models/productoModel");

exports.getProductos = (req, res) => {
    Producto.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createProducto = (req, res) => {
    Producto.create(req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send("Producto creado");
    });
};

exports.updateProducto = (req, res) => {
    Producto.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send("Producto actualizado");
    });
};

exports.deleteProducto = (req, res) => {
    Producto.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.send("Producto eliminado");
    });
};