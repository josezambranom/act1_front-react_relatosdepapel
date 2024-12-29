import React, {useContext} from 'react';
import {Libro} from "../components/Libro";
import {LibroContext} from "../context/LibroContext";
import {LinearProgress} from "@mui/material";
import '../css/libro.css';

export const Overview = () => {

    const { libros } = useContext(LibroContext);

    return (
        <div className='libros'>
            <input className='libros__input' type='text' placeholder='Buscar libro....'/>
            <h2 className="libros__text">Stock libros</h2>
            <div className="libros__container">
                {
                    libros.length > 0 ? (
                        libros.map((libro, index) => (
                            <Libro
                                key={index}
                                id={libro.id}
                                titulo={libro.titulo.toUpperCase()}
                                autor={libro.autor}
                                precio={libro.precio}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )
                }
                {}
            </div>
        </div>
    );
}