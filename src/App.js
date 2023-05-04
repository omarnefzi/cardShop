import { Container } from "react-bootstrap";
import { Routes,Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
  <>
  <NavBar />
  <Container className="mb-4">
    
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/cart" element={<Cart />} />

    </Routes>
  </Container>;
  </>
)}

export default App;
