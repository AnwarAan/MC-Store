import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import Buy from "../Pages/Buy";
import Cart from "../Pages/Cart";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RouteApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/buy/:id" element={<Buy />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default RouteApp;
