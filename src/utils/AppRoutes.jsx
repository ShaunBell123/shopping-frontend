import Home from "../page/Home";
import Dashboard from "../page/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
 
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      
    </Routes>
  );
}

export default AppRoutes;