import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <main>
        <h1>Carregando...</h1>
      </main>
    );
  }

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
