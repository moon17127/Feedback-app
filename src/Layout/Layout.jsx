import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./Navbar/NavBar";

function Layout({ children }) {
  return (
    <>
      <div className="text-white  bg-main">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
