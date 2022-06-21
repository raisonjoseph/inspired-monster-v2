import Head from "next/head";
import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-100">
        <div className="row h-100">
          <div className="col-sm-5">
            <div className="section">
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
            <div className="section"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
