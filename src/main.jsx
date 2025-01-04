import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={routes}></RouterProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
