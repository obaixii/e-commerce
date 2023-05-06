import { Layout } from "./components/index";
import { Home, Categories, Product, Login, Register, CartPage } from "./pages/index";
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
