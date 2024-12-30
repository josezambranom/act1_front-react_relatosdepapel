import { useState, useEffect, useRef } from "react";

export const useToggleMenu = () => {
    const [isVisible, setIsVisible] = useState(false); // Controla si el menú es visible
    const ref = useRef(null); // Referencia al elemento contenedor

    const handleToggle = () => {
        setIsVisible((prev) => !prev);
    };

    const handleShow = () => {
        setIsVisible(true);
    };

    const handleHide = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return { ref, isVisible, handleToggle, handleShow, handleHide };
};