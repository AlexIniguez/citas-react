import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState, useEffect} from 'react'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      //copnvertimos con el json.parse el LS de string a un areglo de nuevo
      const pacienteLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacienteLS);
    }

    obtenerLS()
  }, []);

  //sincronizando el state
  useEffect(()=> {
    // console.log('componente listo o cambio pacientes')
    localStorage.setItem('pacientes', JSON.stringify(pacientes)); //revisa los cambios que sucedan 
  }, [pacientes]);

  const eliminarPaciente = id => {
    //console.log('Elimando paciente...', id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);//traemos todos los pacientes que no sean el que queremos borrar
    // console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className=" mt-12 md:flex">
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>
      
    </div>
  )
}

export default App
