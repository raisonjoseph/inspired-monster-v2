import Head from "next/head";
import React from "react";
import Button from "../../components/Button";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-100">
        <div className="row h-100">
          <div className="col-sm-5">
            <div className="section insta-reel">
              <div className="content">
                <h2>I observe things, Occasionally I connect them ✨</h2>
                <div className="reels">
                  <div className="reel-item"></div>
                  <div className="reel-item"></div>
                  <div className="reel-item"></div>
                </div>
              </div>
              <div className="footer">
                <p>© {new Date().getFullYear()} Inspired Monster · Credits</p>
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
                  Having worked with India2 Startups and communities, I am
                  skilled at following Agile, communicating stakeholder needs,
                  and cross-functional collaboration.
                </p>
                <Button>Download Resume</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutMe;
