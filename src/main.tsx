import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRouter } from "./app/router";
import { MenuProvider } from "./context/MenuContext.js";
import { CartProvider } from "./context/CartContext.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <MenuProvider>
        <AppRouter />
      </MenuProvider>
    </CartProvider>
  </StrictMode>,
);
