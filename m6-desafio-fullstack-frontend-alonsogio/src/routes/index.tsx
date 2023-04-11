import { Routes, Route } from "react-router-dom";
import { Registerpage } from "../pages/Registerpage";
import { Loginpage } from "../pages/Loginpage";
import { Clientpage } from "../pages/Clientpage";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Loginpage />} />
    <Route path="/register" element={<Registerpage />} />
    <Route path="/home" element={<Clientpage />} />
  </Routes>
);
