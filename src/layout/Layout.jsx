import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden relative">
      <Nav />
      <SideNav />
      {children}
      <Footer />
    </div>
  );
}
