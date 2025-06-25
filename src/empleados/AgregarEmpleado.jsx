import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AgregarEmpleado() {

    let navegacion = useNavigate();
    const urlBase = "http://localhost:8080/rh-app/empleados";

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        sueldo: ""
    });

    const { nombre, departamento, sueldo } = empleado;

    const onInputChange = e => {
        // Spread operator ... (expandir objetos)
        setEmpleado({...empleado, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch(urlBase, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(empleado)
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Error al guardar al empleado');
            }

            navegacion('/');
        } catch (error) {
            console.error('Error: ', error);
            alert(`Ocurrió un error: ${error.message}`);     
        }
    }

    return (
        <>
            <div className="container">
                <div className="container text-center m-3">
                    <h3>Agregar Empleado</h3>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" 
                        className="form-control" 
                        id="nombre" 
                        name="nombre"
                        required={true}
                        value={nombre} onChange={e => onInputChange(e)}/>                            
                    </div>
                    <div className="mb-3">
                        <label htmlFor="departamento" className="form-label">Departamento</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="departamento" 
                        name="departamento" 
                        required={true}
                        value={departamento} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sueldo" className="form-label">Sueldo</label>
                        <input 
                        type="number" 
                        step="any" 
                        className="form-control" 
                        id="sueldo" 
                        name="sueldo" 
                        required={true}
                        value={sueldo} onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
                        <Link to="/" className="btn btn-danger btn-sm">Regresar</Link>
                    </div>                                   
                </form>
            </div>
        </>
    )
}
