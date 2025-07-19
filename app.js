const express = require('express');
const app = express();
const port = 3000;

//RUTAS
const filmsRoutes = require('./routes/films');

//Para parsear el body entrante a JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//habilitar rutas
app.use('/api/film', filmsRoutes);

//gestionar error 404
app.use((req, res) => {
  res.status(404).json({ message: 'Film not found' });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = app;