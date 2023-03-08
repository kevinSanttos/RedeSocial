import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { DashBoardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route path="/dashboard" element={<ProtectedRoutes />}>
      <Route index element={<DashBoardPage />} />
    </Route>
  </Routes>
);

export default Router;
