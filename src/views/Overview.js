import React, { useContext, useEffect, useState } from 'react';
import { Libro } from "../components/Libro";
import { LibroContext } from "../context/LibroContext";
import '../css/libro.css';
import Swal from "sweetalert2";
import {useLibros} from "../hooks/useLibros";

export const Overview = () => {
    const { libros } = useContext(LibroContext);
    const [loading, setLoading] = useState(true);
    const [filteredLibros, setFilteredLibros] = useState(libros);

    useEffect(() => {
        if (libros.length === 0) {
            setLoading(true);
            Swal.fire({
                title: 'Cargando....',
                timerProgressBar: true,
                timer: 3000,
                didOpen: () => {
                    Swal.showLoading();
                }
            }).then(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [libros]);

    useEffect(() => {
        // Agregar el event listener al input
        const inputElement = document.querySelector('.libros__input');
        const handleKeyUp = (e) => {
            const query = e.target.value.toLowerCase();  // Obtener el valor del input y ponerlo en minúsculas
            const filtered = libros.filter(libro =>
                libro.titulo.toLowerCase().includes(query)
            );
            setFilteredLibros(filtered);  // Actualizar los libros filtrados
        };

        // Asegurarse de agregar el evento solo una vez
        if (inputElement) {
            inputElement.addEventListener('keyup', handleKeyUp);
        }

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            if (inputElement) {
                inputElement.removeEventListener('keyup', handleKeyUp);
            }
        };
    }, [libros]);


    // Se usa en caso de perdida del contexto de libros por reload de pagina
    const librosNew = useLibros();
    useEffect(() => {
        if(filteredLibros.length === 0){
            setFilteredLibros(librosNew);
        }
    }, [librosNew]);

    return (
        <div className="libros">
            <input className="libros__input" type="text" placeholder="Buscar libro...." />
            <h2 className="libros__text">Stock libros</h2>
            <div className="libros__container">
                {
                    loading ? (
                        <div>Loading...</div>  // Puedes reemplazar esto por un spinner o el mensaje que prefieras
                    ) : (
                        filteredLibros.length > 0 ? (
                            filteredLibros.map((libro, index) => (
                                <Libro
                                    key={index}
                                    id={libro.id}
                                    titulo={libro.titulo.toUpperCase()}
                                    autor={libro.autor}
                                    precio={libro.precio}
                                />
                            ))
                        ) : (
                            <p>No se encontraron libros</p>
                        )
                    )
                }
            </div>
        </div>
    );
};