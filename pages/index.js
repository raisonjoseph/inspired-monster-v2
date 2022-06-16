import Head from "next/head";
import React from "react";
import Button from "../components/Button";
import { LottieAnimation } from "../components/Lottie";

export default function Home() {
  return (
    <div className="container fluid">
      <div className="center">
        <div className="row">
          <div className="col-home">
            <div className="home-image-container">
              <div className="inner">
                <LottieAnimation />
              </div>
              <div className="social-container"></div>
            </div>
          </div>
          <div className="col-home">
            <h2 className="title-1 secondary">
              I am <b>Arun Sajeev</b>, a multidisciplinary designer based in
              Kochi, India, withover 7 years of experience in delivering
              world-class UI/UX, interaction andvisual designs.
            </h2>
            <Button>Chat Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
