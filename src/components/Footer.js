import React from "react";
import '../css/footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <p className='footer__text'>&copy; {new Date().getFullYear()} Todos los derechos reservados. </p>
        </footer>
    );
}