import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext.jsx";
import ProductsContext from "./context/ProductsContext.jsx";
import AuthContext from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <ProductsContext>
      <CartContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContext>
    </ProductsContext>
  </AuthContext>,
);
