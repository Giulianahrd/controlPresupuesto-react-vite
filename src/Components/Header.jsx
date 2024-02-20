import  NuevoPresupuesto  from "./NuevoPresupuesto";
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ presupuesto, setPresupuesto, isValid, setIsValid, gastos, setGastos }) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        { isValid? ( 
             <ControlPresupuesto 
              setIsValid={setIsValid}
              setGastos={setGastos}
              setPresupuesto={setPresupuesto}
              presupuesto={presupuesto}
              gastos={gastos}/> ) : 
           ( <NuevoPresupuesto
              setIsValid={setIsValid}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}/> )}
    </header>
  )
}

export default Header
