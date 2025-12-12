const express = require("express");
const router = express.Router();
const User = require("./models/User");

// Ruta simple
router.get("/hello", (req, res) => {
    const name = req.query.name || "Visitante";
    res.json({ message: `Hola ${name}, bienvenido a la app DevOps!` });
});

// Ruta para guardar un usuario (prueba MongoDB)
router.post("/user", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "Usuario guardado", user });
});

// Ruta para obtener usuarios
router.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;

