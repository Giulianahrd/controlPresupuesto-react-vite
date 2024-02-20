import { useState, useEffect } from 'react'
import Header from './Components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.png'
import Modal from './Components/Modal'
import { generarID } from "./helpers";
import List from './Components/List'
import Filter from "./Components/Filter";
 
function App() {
  const [ presupuesto, setPresupuesto ] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  )
  const [ isValid, setIsValid ] = useState(false)
 
  
  const [ modal, setModal ] = useState (false)
  const [ animar, setAnimar ] = useState(false)
  const [ gastos, setGastos ] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : []
  )

  const [ editGasto, setEditGasto ] = useState({})
  const [ filter, setFilter ] = useState("")
  const [ gastosFiltrados, setGastosFiltrados ] = useState([])

  useEffect (() => {
    
    if (Object.keys(editGasto).length > 0) {

      setModal(true)
      setTimeout(() => {
        setAnimar(true)
      }, 500)

    }

  }, [editGasto])

  useEffect(() => {

    localStorage.setItem("presupuesto", presupuesto ?? 0 )
  },[presupuesto])

  useEffect(() => {
    if (filter) {
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filter )
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filter])

  useEffect(() => { 
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    
    const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0

    if (presupuestoLS > 0) {
      setIsValid(true)      
    }
  },[])


  const handleOnClick = () => {
    setModal(true)
    setEditGasto({})

    setTimeout(() => {
      setAnimar(true)
    }, 500);
  }

  const guardarGasto = gasto => {
     //Actualizar
    if (gasto.id) {
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setEditGasto({})

    } else {
      //Nuevo gasto
      gasto.id = generarID()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimar(false)
    setTimeout(() => {
      setModal(false)
    }, 300);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id)

    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? "fijar" : ""}>

      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        setGastos={setGastos}
        
      />
      {isValid && ( 
       <>
         <main>
            <Filter
            filter={filter}
            setFilter={setFilter}/>

            <List
             gastos={gastos}
             setEditGasto={setEditGasto}
             eliminarGasto={eliminarGasto}
             gastosFiltrados={gastosFiltrados}
             filter={filter}
            />
         </main>

          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={handleOnClick}
            />
          </div>
       </>
      )}


      { modal && <Modal 
                  setModal={setModal} 
                  animar={animar}
                  setAnimar={setAnimar}
                  guardarGasto={guardarGasto}
                  editGasto={editGasto}
                  setEditGasto={setEditGasto}/> } 
      
    </div>
    
  )
}

export default App
