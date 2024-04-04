const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/datos', (req, res) => {
  const datos = [{ nombre: 'Jhovana', apellido: 'Martinez' }, { nombre: 'Marcelo', apellido: 'Acarapi' }];
  res.json(datos);
});


app.post('/datos', (req, res) => {
  const nuevoDato = req.body;
  console.log(`Guardando nuevo dato: ${JSON.stringify(nuevoDato)}`);
  res.json({ mensaje: 'Dato creado correctamente' });
});


app.put('/datos/:id', (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  console.log(`Actualizando dato con ID ${id}: ${JSON.stringify(datosActualizados)}`);
  res.json({ mensaje: 'Dato actualizado correctamente' });
});


app.delete('/datos/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Eliminando dato con ID ${id}`);
  res.json({ mensaje: 'Dato eliminado correctamente' });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


