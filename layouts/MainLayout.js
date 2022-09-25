import classNames from "classnames";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  const [isNeedMorePadding, setIsNeedMorePadding] = useState(false);
  const initialHeight = useRef();
  const innerWidth = useRef();
  useEffect(() => {
    initialHeight.current = window.innerHeight;
    innerWidth.current = window.innerWidth;
    if (window.innerHeight < 740) setIsNeedMorePadding(true);
    function onWindowResize() {
      if (innerWidth.current) {
        if (window.innerWidth !== innerWidth.current) return;
      }
      if (initialHeight.current > window.innerHeight)
        setIsNeedMorePadding(true);
      else setIsNeedMorePadding(false);
      initialHeight.current = window.innerHeight;
      innerWidth.current = window.innerWidth;
    }
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  console.log(isNeedMorePadding);

  return (
    <React.Fragment>
      <Header />
      <main className={classNames(isNeedMorePadding && "extra-space")}>
        {children}
      </main>
      <BottomNav />
    </React.Fragment>
  );
};

export default MainLayout;
