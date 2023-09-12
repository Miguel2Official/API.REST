import './App.css';
import { useState } from "react";
import Axios from "axios";


function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

  const [empleadosLista, setEmpleados] = useState([]);


  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios
    }).then(() => { 
      alert("Empleado registrado");
    }).catch(error => {
      console.error("Error al registrar empleado:", error);
    });
  }


  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados",).then((response) => { // Aquí está la corrección, cambia .thend a .then
      setEmpleados(response.data);
    }).catch(error => {
      console.error("Error al registrar empleado:", error);
    });
  }

  return (
    <div className="App">
      <div className="datos">
        <h2>Registro de Empleados</h2>
        <form>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(event) => {
                setNombre(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Edad:</label>
            <input
              type="number"
              value={edad}
              onChange={(event) => {
                setEdad(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>País:</label>
            <input
              type="text"
              value={pais}
              onChange={(event) => {
                setPais(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Cargo:</label>
            <input
              type="text"
              value={cargo}
              onChange={(event) => {
                setCargo(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Años de experiencia:</label>
            <input
              type="number"
              value={anios}
              onChange={(event) => {
                setAnios(event.target.value);
              }}
            />
          </div>
          <button className="btn" onClick={add}>
            Registrar
          </button>
          <div className='lista'>
          <button className="btn" onClick={getEmpleados}>
            Listar
          </button>

              {
                empleadosLista.map((value,key)=>{
                  return <div className='' >  {value.nombre} </div>
                })
              }

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

