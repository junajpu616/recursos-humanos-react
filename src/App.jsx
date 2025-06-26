import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListaEmpleados from "./empleados/ListaEmpleados"
import Navegacion from "./templates/Navegacion"
import AgregarEmpleado from "./empleados/AgregarEmpleado"
import EditarEmpleado from "./empleados/EditarEmpleado"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ListaEmpleados/>}/>
          <Route path="/agregar" element={<AgregarEmpleado />} />
          <Route path="/editar/:id" element={<EditarEmpleado/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
