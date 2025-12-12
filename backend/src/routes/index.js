const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  const name = req.query.name || 'Visitante';
  res.json({ 
    message: `Hola ${name}, bienvenido a la app DevOps!`,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
