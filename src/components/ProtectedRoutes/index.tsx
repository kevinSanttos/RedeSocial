import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { StyledMainLoad } from "./style";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <StyledMainLoad>
        <h1>Carregando...</h1>
      </StyledMainLoad>
    );
  }

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
