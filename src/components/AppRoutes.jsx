import "../App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppPage from "../pages/MainApp";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SignOutPage from "../pages/SignOut";
import AddNewTaskPage from "../pages/AddNewTask";
import CardViewAndEditPage from "../pages/CardViewAndEdit";
import CardBoardPage from "../pages/CardsBoard";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<AppPage />}>
          <Route path="card/add" element={<AddNewTaskPage />} />
          <Route path="card/:id" element={<CardViewAndEditPage />} />
          <Route path="board" element={<CardBoardPage />} />
          <Route path="exit" element={<SignOutPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
