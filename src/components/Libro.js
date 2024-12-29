import React from "react";
import { Link } from "react-router-dom";

export const Libro = ({ id, titulo, autor, precio }) => {
    return (
        <Link to={`/libros/${id}`}>
            <div className="libros__libro">
                <p><span>Título:</span> "{titulo}"</p>
                <p><span>Autor:</span> {autor}</p>
                <p><span>Precio:</span> $ {precio}</p>
            </div>
        </Link>
    );
}