import Head from "next/head";
import React, { useLayoutEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Credits from "../../components/Credits";

const AboutMe = () => {
  const [showCredits, setShowCredits] = useState(false);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    function updateSize() {
      if (!contentRef.current || !footerRef.current) return;
      const contentXPos = contentRef.current.getBoundingClientRect().x;
      footerRef.current.style.width = `${
        contentXPos + contentRef.current.clientWidth
      }px`;
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleOnShowCreditsClick = () => {
    setShowCredits(true);
  };

  const onCreditsClose = () => {
    setShowCredits(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="about-me h-100">
        <div className="fake-fill" />
        <div className="row h-100">
          <div className="col-sm-5">
            <div className="insta-reel">
              <div className="content" ref={contentRef}>
                <h2>I observe things, Occasionally I connect them ✨</h2>
                <div className="reels">
                  <div className="reel-item"></div>
                  <div className="reel-item"></div>
                  <div className="reel-item"></div>
                </div>
              </div>
              <div className="footer" ref={footerRef}>
                <p>
                  © {new Date().getFullYear()} Inspired Monster ·
                  <span onClick={handleOnShowCreditsClick}> Credits</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="section info">
              <div className="content">
                <h2>👋 Hi there, I’m Arun Sajeev</h2>
                <h2 className="broken">
                  👋 Hi there, <br />
                  I’m Arun Sajeev
                </h2>
                <p>
                  I am a multidisciplinary designer obsessed with problem
                  solving. I specialise in User Experience and Interaction
                  Design for digital goods in order to bridge the gap between
                  users and their goals, while balancing business values and
                  positive experiences.
                </p>
                <p>
                  Having worked with <b>India2 Startups</b> and communities, I
                  am skilled at following Agile, communicating stakeholder
                  needs, and cross-functional collaboration.
                </p>
                <a
                  className="btn"
                  href="https://drive.google.com/file/d/1hPngXYPnSo5Q2vZ_y3NLk6EUFdjPsRkZ/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
                <div className="footer">
                  <p>
                    © {new Date().getFullYear()} Inspired Monster ·
                    <span onClick={handleOnShowCreditsClick}> Credits</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Credits open={showCredits} onClose={onCreditsClose} />
    </React.Fragment>
  );
};

export default AboutMe;
