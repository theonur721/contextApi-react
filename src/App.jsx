import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/sepet" element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App
