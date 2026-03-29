import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { TaskProvider } from "./context/TaskProvider.jsx";
import { GlobalStyle } from "./components/GlobalStyles.js";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <TaskProvider>
          <BrowserRouter>
            <GlobalStyle />
            <ToastContainer autoClose={3000} theme="colored" />
            <App />
          </BrowserRouter>
        </TaskProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
