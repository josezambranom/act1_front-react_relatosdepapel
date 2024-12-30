import React, {useContext} from "react";
import {CartshopContext} from "../context/CartshopContext";
import useRedirection from "../hooks/useRedirection";
import '../css/checkout.css';
import {Link} from "react-router-dom";
import {showSwal} from "../components/Swal";

const CheckoutDetails = () => {
    const {items, removeCart} = useContext(CartshopContext);
    const total = items.reduce((total, item) => total + item.precio * item.cantidad, 0);

    useRedirection("/libros", 2000, items.length === 0);

    const confirmarCompra = () => {
        showSwal("Compra realizada con éxito", "success", "¡Muchas gracias por preferirnos!");
        removeCart();
    }

    return (
        <div className="checkout">
            <div className="checkout__resumen">
                <h2 className="checkout__titulo">Resumen de Compra</h2>
                    {items.length > 0 ? (
                        <div className="checkout__resumen__item-container">
                            {items.map((item) => (
                                <div key={item.id} className="checkout__resumen__item">
                                    <p>{item.titulo}</p>
                                    <p>
                                        {item.cantidad} {item.cantidad > 1 ? "unidades" : "unidad"}
                                    </p>
                                    <p>
                                        ${item.precio * item.cantidad}
                                    </p>
                                </div>
                            ))}
                            <div className="checkout__total">
                                <p className="checkout__total__text">Total a pagar: ${total}</p>
                                <div className="checkout__boton">
                                    <button onClick={confirmarCompra} className="checkout__boton__pagar">Finalizar Compra</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="checkout__resumen__text">
                            <p>No hay productos en el carrito para pagar.</p>
                        </div>
                    )}
                    <Link className="checkout__resumen__text" to="/libros">Volver</Link>
            </div>
        </div>
)
    ;
}

export default CheckoutDetails;