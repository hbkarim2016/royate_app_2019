import React from "react";
import LoadingPage from "../includes/loadingPage";
import Header from "../includes/header";
import ToTop from "../includes/toTop";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Menu from "../pages/menu";
import Shop from "../pages/shop";
import Reservation from "../pages/reservation";
import Blog from "../pages/blog";
import Post from "../pages/post";
import Error404 from "./error";

const Router = () => {
  return (
    <div className="font_family_body font_color_body body_size text-center">
      <LoadingPage />
      <div>
        <Header />
        <Home />
        <About />
        <Contact />
        <Menu />
        <Shop />
        <Reservation />
        <Blog />
        <Post />
        <Error404 />
      </div>
      <ToTop />
    </div>
  );
};

export default Router;
