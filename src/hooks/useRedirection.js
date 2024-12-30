import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirection = (path, delay, condition = true) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (condition) {
            const timer = setTimeout(() => {
                navigate(path);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [path, delay, condition, navigate]);
};

export default useRedirection;
