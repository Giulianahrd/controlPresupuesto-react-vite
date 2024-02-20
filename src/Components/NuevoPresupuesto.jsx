import { useState } from "react"

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValid}) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    if ((presupuesto) > 0) {
       setIsValid(true)
    }
    
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        
        <form className="formulario" onSubmit={handleSubmit}>
            <div className="campo">

                <label>Definir Presupuesto</label>
                <input
                   className="nuevo-presupuesto"
                   type="text"
                   placeholder="Añade tu presupuesto"
                   value={presupuesto}
                   onChange={ e => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input
              type="submit"
              value="Añadir"
            />

        </form>

    </div>
  )
}

export default NuevoPresupuesto
