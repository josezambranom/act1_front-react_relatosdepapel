// LibroDetails.js
import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import {LibroContext} from '../context/LibroContext';

const LibroDetails = () => {
    const { libroId } = useParams();
    const { libros } = useContext(LibroContext);
    const libro = libros.find(r => r.id.toString() === libroId);

    if (!libro) {
        return <h2>Libro no encontrado</h2>;
    }

    console.log(libro.titulo);

    return (
        <div className="libro">
            <h2 className="libros_titulo">Título: {libro.titulo}</h2>
            <p className="libro__autor">Autor: {libro.autor}</p>
            <p className="libro__precio">Precio: $ {libro.precio}</p>
            <button className="libro__boton">Añadir al Carrito</button>
        </div>
    );
}

export default LibroDetails;