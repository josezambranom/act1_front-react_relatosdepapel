import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>404 - Página no encontrada</h1>
            <Link to="/"><h2>Volver al inicio</h2></Link>
        </div>
    );
}

export default NotFound;
