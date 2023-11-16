import './App.css';
import './estilo.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {
  
  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [dni,setDni] = useState("");
  const [curso,setCurso] = useState("");
  const [email,setEmail] = useState("");
  const [telefono,setTelefono] = useState(0);
  const [listaCursos,setListaCursos] = useState([]); 

  const carga = () =>{
    Axios.post("http://127.0.0.1:3131/inserta",
    {
      nombre:nombre,
      apellido:apellido,
      dni:dni,
      curso:curso,
      email:email,
      telefono:telefono,
    }
  ).then(()=>{
    alert("alumno cargado");
  });
}

const muestra = ()=>{
  Axios.get("http://127.0.0.1:3131/muestra").then((respuesta)=>{
    setListaCursos(respuesta.data);
  })
}

  return (
    <div className="App">
      <div className="formulario-container">
        <form>
        <label>Nombre:</label>
        <input onChange={(evento)=>{
          setNombre(evento.target.value)
        }} type="text" />
        <br/>

        <label>Apellido:</label>
        <input onChange={(evento)=>{
          setApellido(evento.target.value)
        }} type="text" />
        <br/>

        <label>Dni:</label>
        <input onChange={(evento)=>{
          setDni(evento.target.value)
        }}  type="text" />
        <br/>

        <label>Curso:</label>
        <input onChange={(evento)=>{
          setCurso(evento.target.value)
        }}  type="text" />
        <br/>
        
        <label>E-mail:</label>
        <input onChange={(evento)=>{
          setEmail(evento.target.value)
        }}  type="text" />
        <br/>

        <label>Telefono:</label>
        <input onChange={(evento)=>{
          setTelefono(evento.target.value)
        }}  type="text" />
        <br/>

        <button onClick={carga}>Ingresaaar</button>
        </form>
        <input onClick={muestra} type="submit" value="Mostrar" />
        {
          listaCursos.map((val,id)=>{
            return (
              <div>
                <p>
                  Nombre: {val.nombre}<br/>
                  Apellido: {val.apellido}<br/>
                  Curso: {val.curso}<br/>                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
