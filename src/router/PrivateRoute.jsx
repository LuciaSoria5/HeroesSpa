import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  
    const { logged } = useContext( AuthContext );

    return (logged)
        ? children // si esta logueado, permite renderizar los hijos
        : <Navigate to={"/login"} /> // si no esta logueado, vamos a /login de nuevo
};
