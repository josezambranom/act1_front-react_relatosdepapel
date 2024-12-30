import React, { useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import { CartshopContext } from '../context/CartshopContext';
import {LibroContext} from "../context/LibroContext";
import {showSwal} from '../components/Swal';

const LibroDetails = () => {
    const { libroId } = useParams();
    const { libros } = useContext(LibroContext);
    const { addToCart } = useContext(CartshopContext);

    const libro = libros.find((r) => r.id.toString() === libroId);

    if (!libro) {
        return <h2>Libro no encontrado</h2>;
    }

    const agregarCarrito = () => {
        addToCart(libro); // Agregar el libro al carrito
        showSwal("¡Éxito!", "success", "El libro se ha añadido al carrito de compras.");
    }

    return (
        <div className="libro">
            <h2 className="libros_titulo">{libro.titulo}</h2>
            <p className="libro__autor">{libro.autor}</p>
            <p className="libro__precio">$ {libro.precio}</p>
            <button className="libro__boton" onClick={agregarCarrito}>
                Añadir al Carrito
            </button>
            <Link to="/libros">Volver</Link>
        </div>
)
    ;
};

export default LibroDetails;