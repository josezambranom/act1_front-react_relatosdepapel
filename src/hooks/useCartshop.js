import { useState } from "react";

export const useCartshop = () => {
    const [items, setItems] = useState([]);

    // Añadir producto al carrito
    const addToCart = (producto) => {
        setItems((prevItems) => {
            // Buscar si el producto ya está en el carrito
            const existingProductIndex = prevItems.findIndex((item) => item.id === producto.id);

            if (existingProductIndex !== -1) {
                // Si el producto existe, incrementar la cantidad
                const updatedItems = [...prevItems];
                updatedItems[existingProductIndex].cantidad += 1;
                return updatedItems;
            } else {
                // Si no existe, añadir el producto con cantidad 1
                return [...prevItems, { ...producto, cantidad: 1 }];
            }
        });
    };

    // Eliminar o reducir la cantidad del producto en el carrito
    const removetoCart = (id) => {
        setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    // Si la cantidad es mayor a 1, solo se reduce
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    }
                    // Si la cantidad es 1, se elimina el producto
                    return null;
                }
                return item;
            }).filter(item => item !== null); // Eliminar productos con valor null
        });
    };

    const removeCart = () => {
        setItems([]);
    }

    return {
        items,
        addToCart,
        removetoCart,
        removeCart
    };
};