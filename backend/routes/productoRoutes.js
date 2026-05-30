const express = require("express");
const router = express.Router();

const controller = require("../controllers/productoController");

router.get("/productos", controller.getProductos);
router.post("/productos", controller.createProducto);
router.put("/productos/:id", controller.updateProducto);
router.delete("/productos/:id", controller.deleteProducto);

module.exports = router;