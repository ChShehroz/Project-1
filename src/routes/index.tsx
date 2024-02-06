import { Routes, Route } from "react-router-dom";
import SignIn from "../Component/SignIn/Sign";
import Home from "../Container/HomePage";
const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
};
