import { useEffect, useState } from "react";

export default function ListaEmpleados() {

    const urlBase = "http://localhost:8080/rh-app/empleados";

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        fetch(urlBase)
        .then(res => {
            if (!res.ok) throw new Error('Error al cargar empleados');
            return res.json();
        })
        .then(data => setEmpleados(data))
        .catch(err => console.log(err));
    }

    return (
        <>
            <div className='container'>
                <div className='container text-center m-3'>
                    <h3>Sistema de Recursos Humanos</h3>
                </div>
                <table className="table table-striped table-hover align-middle">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Empleado</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Sueldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Iteramos el arreglo de Empleados
                            empleados.map((empleado, indice) => (
                                <tr key={indice}>
                                    <th scope="row">{empleado.idEmpleado}</th>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.departamento}</td>
                                    <td>
                                        {empleado.sueldo.toLocaleString('es-GT', {
                                            style: 'currency',
                                            currency: 'GTQ'
                                        })}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
