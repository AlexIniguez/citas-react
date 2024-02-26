
const Paciente = ({paciente, setPaciente}) => {

  const{nombre, propietario, email, fecha, sintomas} = paciente

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{''}
          <span className="font-normal normal-case m-1">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{''}
          <span className="font-normal normal-case m-1">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{''}
          <span className="font-normal normal-case m-1">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha:{''}
          <span className="font-normal normal-case m-1">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{''}
          <span className="font-normal normal-case m-1">{sintomas}</span>
        </p>
        <div className="flex justify-between md:mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-boldn uppercase rounded-xl"
            onClick={() => setPaciente(paciente)}
          >Editar</button>
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-boldn uppercase rounded-xl"
          >Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente
