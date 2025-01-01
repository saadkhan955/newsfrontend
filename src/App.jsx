import { Routes, Route } from "react-router-dom";

import "./assets/js/global.js";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import SingleNews from "./pages/SingleNews.jsx";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/singlenews" element={<SingleNews />} />
      </Routes>
    </>
  );
}

export default App;
