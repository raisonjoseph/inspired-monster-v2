import Head from "next/head";
import React, { useEffect } from "react";
import Button from "../components/Button";
import { LottieAnimation } from "../components/Lottie";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import TwitterIcon from "../assets/images/twitter_lg.svg";
import InstagramIcon from "../assets/images/instagram_lg.svg";
import LinkedinIcon from "../assets/images/linkedin_lg.svg";
import DribbleIcon from "../assets/images/dribble_lg.svg";
import SocialItem from "../components/SocialItem";
import constants from "../utils/constants";

export default function Home() {
  useEffect(() => {}, []);

  const handleHeadPhoneClick = () => {
    console.log("Play some fukin songs");
  };

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container fluid">
        <div className="center">
          <div className="row gutter">
            <div className="col-sm">
              <div className="home-image-container">
                <div className="inner">
                  <LottieAnimation onMusicClick={handleHeadPhoneClick} />
                </div>
                <div className="social-container">
                  <SocialItem path="" icon={DribbleIcon} />
                  <SocialItem path="" icon={TwitterIcon} />
                  <SocialItem path="" icon={LinkedinIcon} />
                  <SocialItem path="" icon={InstagramIcon} />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <h2 className="title-1 secondary">
                I am <b>Arun Sajeev</b>, a multidisciplinary designer based in
                Kochi, India, withover 7 years of experience in delivering
                world-class UI/UX, interaction and visual designs.
              </h2>
              <Button icon={WhatsappIcon} className="mt-40">
                Chat Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
