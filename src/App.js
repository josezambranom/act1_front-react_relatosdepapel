import React from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {LibroContext} from "./context/LibroContext";
import {useLibros} from "./hooks/useLibros";
import {useCartshop} from "./hooks/useCartshop";
import {CartshopContext} from "./context/CartshopContext";

function App() {

    const libros = useLibros();
    const carrito = useCartshop();

    return (
        <LibroContext.Provider value={{libros}}>
            <CartshopContext.Provider value={carrito}>
                <GlobalRouter></GlobalRouter>
            </CartshopContext.Provider>
        </LibroContext.Provider>
    );
}

export default App;
