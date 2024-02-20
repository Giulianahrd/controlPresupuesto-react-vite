import {useState, useEffect} from 'react'

const Filter = ({filter, setFilter}) => {
  return (
    <div className='filtros sombre contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                   value={filter}
                   onChange={(e) => setFilter(e.target.value)}
                >
                <option value="">Seleccionar</option>
                  <option value="">Seleccione</option>
                  <option value="ahorro">Ahorro</option>
                  <option value="salud">Salud</option>
                  <option value="comida">Comida</option>
                  <option value="gastos">Gastos Varios</option>
                </select>

            </div>
        </form>
      
    </div>
  )
}

export default Filter
