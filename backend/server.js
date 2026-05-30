const express = require("express");
const cors = require("cors");

const categoriaRoutes = require("./routes/categoriaRoutes");
const productoRoutes = require("./routes/productoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// prueba
app.get("/", (req, res) => {
    res.send("API Inventario funcionando");
});

// rutas
app.use("/api", categoriaRoutes);
app.use("/api", productoRoutes);

app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000");
});