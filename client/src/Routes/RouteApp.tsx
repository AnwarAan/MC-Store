import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import Buy from "../Pages/Buy";
import Cart from "../Pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

interface Detail {
  id: number;
  title: string;
}

interface ID {
  id: number;
}

const RouteApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/product/:id`} element={<Detail />} />
        <Route path={`/buy/:id`} element={<Buy />} />
        <Route path={`/cart`} element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default RouteApp;
