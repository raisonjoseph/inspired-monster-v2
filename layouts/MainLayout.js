import Head from "next/head";
import React from "react";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <BottomNav />
    </React.Fragment>
  );
};

export default MainLayout;
