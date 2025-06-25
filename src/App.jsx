import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListaEmpleados from "./empleados/ListaEmpleados"
import Navegacion from "./templates/Navegacion"
import AgregarEmpleado from "./empleados/AgregarEmpleado"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ListaEmpleados/>}/>
          <Route path="/agregar" element={<AgregarEmpleado />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
