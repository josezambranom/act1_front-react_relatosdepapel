    import React from 'react';
    import useRedirection from "../hooks/useRedirection";
    import '../css/landing.css';

    function Landing() {

        useRedirection("/libros", 5000); // Redireccionamos a la vista de restaurantes en 3 segundos

        return (
            <div className='landing'>
                <div className='landing__imagen'></div>
                <h1 className='landing__titulo'>Bienvenido(a) a Relatos de Papel</h1>
                <p className='landing__descripcion'>¡El dueño de tus lecturas favoritas!</p>
                <span className="landing__pointer"></span> {/* Puntero láser original */}
                <span className="landing__pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
            </div>
        );
    }

    export default Landing;
