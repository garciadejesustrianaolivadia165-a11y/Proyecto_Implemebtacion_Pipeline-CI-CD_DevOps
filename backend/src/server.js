const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://db:27017/devops_demo')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error MongoDB:', err));

// Rutas
app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando' });
});

app.listen(3000, () => console.log('Servidor backend en puerto 3000'));
