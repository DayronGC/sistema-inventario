const Categoria = require("../models/categoriaModel");

exports.getCategorias = (req, res) => {
    Categoria.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createCategoria = (req, res) => {
    Categoria.create(req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send("Categoría creada");
    });
};

exports.updateCategoria = (req, res) => {
    Categoria.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.send("Categoría actualizada");
    });
};

exports.deleteCategoria = (req, res) => {
    Categoria.delete(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        res.send("Categoría eliminada");
    });
};