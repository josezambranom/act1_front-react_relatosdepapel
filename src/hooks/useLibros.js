import {useEffect, useState} from "react";

export const useLibros = () => {

    const [libros, setLibros] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setRestaurants(res));

        setTimeout(() => {
            setLibros([
                {
                    id: 1,
                    titulo: "El principito",
                    autor: "Antoine de Saint-Exupéry",
                    precio: 100
                },
                {
                    id: 2,
                    titulo: "El alquimista",
                    autor: "Paulo Coelho",
                    precio: 150
                },
                {
                    id: 3,
                    titulo: "Cien años de soledad",
                    autor: "Gabriel García Márquez",
                    precio: 200
                },
                {
                    id: 4,
                    titulo: "Don Quijote de la Mancha",
                    autor: "Miguel de Cervantes",
                    precio: 250
                },
                {
                    id: 5,
                    titulo: "La metamorfosis",
                    autor: "Franz Kafka",
                    precio: 300
                },
                {
                    id: 6,
                    titulo: "El retrato de Dorian Gray",
                    autor: "Oscar Wilde",
                    precio: 350
                },
                {
                    id: 7,
                    titulo: "La Odisea",
                    autor: "Homero",
                    precio: 400
                },
            ]);
        }, 3000);
    }, []);

    return libros;
}