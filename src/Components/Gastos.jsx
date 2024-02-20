import { formatearFecha } from "../helpers";
import  icono  from "../img/icono.png";
import nuevo  from "../img/nuevo-gasto.png";

const Gastos = ({gasto, setEditGasto, eliminarGasto}) => {
    const { categoria, nombre, cantidad, id, fecha} = gasto

    const iconosGastos = {
      ahorro: icono,
      salud: icono,
      comida: icono,
      gastos: icono
    }

    const handleOnClickEdit = () => {
      setEditGasto(gasto)
    }

  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            
            <img
              src={iconosGastos[categoria]}
              alt="icono de gastos"
            />
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">
                   Agregado el: <span>{formatearFecha(fecha)}</span>
                </p>
            </div>
        </div>
        <p className="cantidad-gasto">${cantidad}</p>
        <div className="contenido-gasto">
           <img
              src={nuevo}
              alt="icono editar"
              onClick={handleOnClickEdit}
            />
         </div>

         <div className="contenido-gasto">
           <img
              src={nuevo}
              alt="icono eliminar"
              onClick={() => eliminarGasto(id)}
            />
         </div>
    </div>
  )
}

export default Gastos
