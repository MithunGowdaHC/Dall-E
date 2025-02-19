import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { logo } from "./assets";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <header className=" flex w-full justify-between items-center px-5 py-5 border-b border-b-[#e6ebf4] ">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-28 object-contain" />
        </Link>
        <Link  to="/create-post" className=" font-inter font-medium bg-[#6469ff]  text-white px-4 py-2 rounded-md ">
        Create
        </Link>
      </header>

      <main className=" sm:p-8 px-4 py-8 w-full bg-[#f9fafe]  min-h-[calc(100vh-73px)]  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;