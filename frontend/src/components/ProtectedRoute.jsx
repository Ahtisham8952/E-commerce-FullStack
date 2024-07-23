import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useDisplayUser } from "../context/UserContextProvider";

const ProtectedRoute = ({ element }) => {
    const { user, setUser } = useDisplayUser();

  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
