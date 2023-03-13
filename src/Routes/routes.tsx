import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PostsProvider } from "../contexts/PostsContext";
import { DashBoardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<ProtectedRoutes />}>
      <Route index element={<PostsProvider><DashBoardPage /></PostsProvider>} />
    </Route>
    <Route path="/user" element={<ProtectedRoutes />}>
      <Route index element={ <PostsProvider><UserPage /></PostsProvider>} />
    </Route>
  </Routes>
);

export default Router;
