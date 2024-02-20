import btnCerrar from '../img/cerrar-modal.png'
import { useState, useEffect } from "react";
import Message from './Message'

const Modal = ({ setModal, animar, setAnimar, guardarGasto, editGasto, setEditGasto }) => {

  const [ nombre, setNombre ] = useState("")
  const [ cantidad, setCantidad ] = useState("")
  const [ categoria, setCategoria ] = useState("")
  const [ mensaje, setMensaje ] = useState("")
  const [ id, setId ] = useState("")
  const [ fecha, setFecha ] = useState("")

  useEffect(() => {

    if (Object.keys(editGasto).length > 0) {
      setNombre(editGasto.nombre)
      setCantidad(editGasto.cantidad)
      setCategoria(editGasto.categoria)
      setId(editGasto.id)
      setFecha(editGasto.fecha)
    }
  }, [])

  const handleOnClickClose = () => {
    setAnimar(false)
    setEditGasto({})
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([ nombre, cantidad, categoria ].includes("")){
        setMensaje("todos los campos son obligatorios")
    }

    guardarGasto({ nombre, cantidad, categoria, id, fecha })
  }

  return (
   
    <div className='modal'>
      <div className='cerrar-modal'>
         <img
           src={btnCerrar}
           alt='cerrar modal'
           onClick={handleOnClickClose}
         />
       </div>

       <form 
          className={ `formulario ${animar? "animar" : "cerrar"}`}
          onSubmit={handleSubmit}>

          <legend> {editGasto.nombre? "Editar Gasto" : "Nuevo Gasto"} </legend>
          {mensaje && <Message type="error">{mensaje}</Message>}
        
          <div className='campo'>
            <label htmlFor='nombre'>Nombre gasto</label>

            <input
              id='nombre'
              type='text'
              placeholder='Añade el tipo de gasto'
              value={nombre}
              onChange={ e => setNombre(e.target.value)}/>
          </div>

          <div className='campo'>
            <label htmlFor='cantidad'>Cantidad</label>

            <input
              id='cantidad'
              type='number'
              placeholder='Añade el monto del gasto'
              value={cantidad}
              onChange={e => setCantidad(Number(e.target.value))}/>
          </div>

          <div className='campo'>
            <label htmlFor='categoria'>Categoria</label>

            <select
              id='categoria'
              value={categoria}
              onChange={ e => setCategoria(e.target.value)}>
                <option value="">Seleccione</option>
                <option value="ahorro">Ahorro</option>
                <option value="salud">Salud</option>
                <option value="comida">Comida</option>
                <option value="gastos">Gastos Varios</option>

            </select>
            
          </div>

          <input 
            type='submit'
            value={editGasto.nombre? "Guardar Cambios" : "Añadir Gasto"}/>
       </form>


    </div>
  )
}

export default Modal
