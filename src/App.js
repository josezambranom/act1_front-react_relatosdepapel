import React from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {LibroContext} from "./context/LibroContext";
import {useLibros} from "./hooks/useLibros";

function App() {

    const libros = useLibros();

    return (
        <LibroContext.Provider value={{libros}}>
            <GlobalRouter></GlobalRouter>
        </LibroContext.Provider>
    );
}

export default App;
