import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { TaskProvider } from "./context/TaskProvider.jsx";
import { GlobalStyle } from "./components/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  </StrictMode>,
);
