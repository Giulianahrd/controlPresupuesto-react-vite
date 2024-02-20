import Gastos from "./Gastos";

const List = ({ gastos, setEditGasto, eliminarGasto, filter, gastosFiltrados }) => {

  return (
    <div className="Listado-gastos contenedor">
      

       {filter ? (
         <>
           <h2>{gastosFiltrados.length? "Gastos" : "No hay gastos"}</h2>
           { gastosFiltrados.map( gasto => (
           <Gastos
            setEditGasto={setEditGasto}
            gasto={gasto}
            key={gasto.id}
            eliminarGasto={eliminarGasto}
          />
       )) } </>
       ) : ( gastos.map( gasto => (
           <Gastos
            setEditGasto={setEditGasto}
            gasto={gasto}
            key={gasto.id}
            eliminarGasto={eliminarGasto}
          />
       )))
       }
    </div>
    
  )
}

export default List

