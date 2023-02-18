import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Credits from "../../components/Credits";
import InstaThumbnail1 from "../../assets/images/insta_1.jpg";
import InstaThumbnail2 from "../../assets/images/insta_2.jpg";
import InstaThumbnail3 from "../../assets/images/insta_3.jpg";
import InstaThumbnail4 from "../../assets/images/insta_4.jpg";
import InstaThumbnail5 from "../../assets/images/insta_5.jpg";
import InstaThumbnail6 from "../../assets/images/insta_6.jpg";

const AboutMe = () => {
  const [showCredits, setShowCredits] = useState(false);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  const reelRef = useRef(null);

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

  useEffect(() => {
    if (!reelRef.current) return;
    const element = reelRef.current;
    function horizontalScroll(event) {
      event.preventDefault();
      element.scrollBy({
        left: event.deltaY < 0 ? -10 : 10,
        behaviour: "smooth",
      });
    }
    reelRef.current.addEventListener("wheel", horizontalScroll);
    return () => {
      element.removeEventListener("wheel", horizontalScroll);
    };
  }, [reelRef]);

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
                <div className="reels" ref={reelRef}>
                  <div className="reel-item">
                    <a
                      href="https://www.instagram.com/reel/CcK0FlaF3UZ/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={InstaThumbnail1}
                        layout="responsive"
                        alt="insta"
                      />
                    </a>
                  </div>
                  <div className="reel-item">
                    <a
                      href="https://www.instagram.com/reel/CiPCoURuWev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={InstaThumbnail2}
                        layout="responsive"
                        alt="insta"
                      />
                    </a>
                  </div>
                  <div className="reel-item">
                    <a
                      href="https://www.instagram.com/reel/ChLtbHHFMxu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={InstaThumbnail3}
                        layout="responsive"
                        alt="insta"
                      />
                    </a>
                  </div>
                  <div className="reel-item">
                    <a
                      href="https://www.instagram.com/reel/CgMivC1FHOe/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={InstaThumbnail4}
                        layout="responsive"
                        alt="insta"
                      />
                    </a>
                  </div>
                  <div className="reel-item">
                    <a
                      href="https://www.instagram.com/reel/Ce3ea2_loWc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={InstaThumbnail5}
                        layout="responsive"
                        alt="insta"
                      />
                    </a>
                  </div>
                  <div className="reel-item">
                    <a
                      href="https://www.instagram.com/reel/CfQ6V3hoRz0/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={InstaThumbnail6}
                        layout="responsive"
                        alt="insta"
                      />
                    </a>
                  </div>
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
                  solving. I specialise in <b>User Experience</b> and
                  Interaction Design for digital goods in order to bridge the
                  gap between users and their goals, while balancing business
                  values and positive experiences.
                </p>
                <p>
                  Having worked with <b>India2 Startups</b> and communities, I
                  am skilled at following Agile, communicating stakeholder
                  needs, and cross-functional collaboration.
                </p>
                <a
                  className="btn resume"
                  href="https://drive.google.com/file/d/1qLl699B5wEhUSmqsb1f6kYSedvuP6Nss/view"
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
