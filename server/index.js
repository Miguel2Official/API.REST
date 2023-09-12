const express = require("express");
const app = express();
const cors= require("cors");


app.use(cors());

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Delicrem",
});

app.use(express.json()); 

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const pais = req.body.pais;
  const cargo = req.body.cargo;
  const anios = req.body.anios;

  
  db.query(
    'INSERT INTO empleados (nombre, edad, pais, cargo, anios) VALUES (?, ?, ?, ?, ?)',
    [nombre, edad, pais, cargo, anios],
    (error, results) => {
      if (error) {
        console.error("Error al insertar en la base de datos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        console.log("Registro insertado correctamente");
        res.status(200).json({ message: "Registro insertado correctamente" });
      }
    }
  );
});

app.get("/empleados", (req, res) => {

  // Corrige la consulta SQL y pasa los valores como un arreglo
  db.query(
    'SELECT * FROM empleados ',
    (error, results) => {
      if (error) {
        console.error("Error al insertar en la base de datos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
      } else {
        console.log("Registro insertado correctamente");
        res.send(results);

      }
    }
  );
});



app.listen(3001, () => {
  console.log("Corriendo en el puerto: 3001");
});
