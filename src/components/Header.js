import React, {useContext} from "react";
import '../css/header.css';
import {useToggleMenu} from "../hooks/useToggleMenu";
import {CartshopContext} from "../context/CartshopContext";
import {Link} from "react-router-dom";
import {showSwal} from "./Swal";

export const Header = () => {
    const { ref, isVisible, handleToggle, handleShow} = useToggleMenu();
    const {items, removetoCart} = useContext(CartshopContext);
    const total = items.reduce((total, item) => total + item.precio * item.cantidad, 0);

    const eliminarItem = (id) => {
        removetoCart(id)
        showSwal("El item fue eliminado", "success", "Un elemento ha sido eliminado del carrito con éxito");
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className='header__imagen'></div>
                <h1 className="header__titulo">Relatos de Papel</h1>
                <div
                    ref={ref}
                    className="header__cartshop"
                    onClick={handleToggle}
                    onMouseEnter={handleShow}
                    data-count = {items.length}
                >
                    <img
                        className="header__cartshop-img"
                        src="/shopping-cart.png"
                        alt="Carshop"
                    />
                    <div className={`menu-shop ${isVisible ? "menu-shop__mostrar" : ""}`}>
                        <h2 className="menu-shop__titulo">Mi Carrito</h2>
                        <ul className="menu-shop__head">
                            <li>Items</li>
                            <li>Cantidad</li>
                            <li>Precio</li>
                            <li></li>
                        </ul>
                        <div className="menu__shop-container">
                            {
                                (items.length > 0) ? (
                                    items.map((item) => (
                                        <div key={item.id} className="menu-shop__item">
                                            <p className="menu-shop__item-container">{item.titulo}</p>
                                            <p className="menu-shop__item-container">{item.cantidad}
                                                {item.cantidad > 1 ? " unidades" : " unidad"}</p>
                                            <p className="menu-shop__item-container">${item.precio * item.cantidad}</p>
                                            <div className="menu-shop__item-container">
                                                <button className='menu-shop__boton menu-shop__boton--eliminar'
                                                        onClick={() => eliminarItem(item.id)}>Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="menu-shop__empty">El carrito está vacío</div>
                                )}
                            {items.length > 0 && (
                                <div className="menu-shop__total">
                                    <p className="menu-shop__item-container">Total: ${total}</p>
                                    <div className="menu-shop__item-container">
                                        <Link to={'/checkout'}>
                                            <button className='menu-shop__boton'>Ir a Pagar</button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};