import Head from "next/head";
import React, { useState } from "react";
import Button from "../../components/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [project, setProject] = useState("Website");
  const [projectDescription, setProjectDescription] = useState("");

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOnPhoneOrEmailChange = (e) => {
    setPhoneOrEmail(e.target.value);
  };

  const handleRadioButtonClick = (e) => {
    setProject(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Inspired Monster | About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-100 contact-us">
        <div className="row h-100">
          <div className="col-sm-5">
            <div className="lets-chat">
              <div className="content">
                <h2>Let’s Chat! 💬</h2>
                <p>
                  For quick replies call me (📲
                  <a href="tel:9946701501" target="_blank" rel="noreferrer">
                    9946701501
                  </a>
                  ) . For easy connect, find me on{" "}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    instagram
                  </a>{" "}
                  or you can also email me at&nbsp;
                  <a
                    href="mailto:arun14949@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    arun14949@gmail.com
                  </a>
                </p>
              </div>
              <div className="footer">
                <p>© {new Date().getFullYear()} Inspired Monster · Credits</p>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="section contact">
              <div className="content">
                <h3>Have a project to talk about?</h3>
                <div className="row gutter-3">
                  <div className="col-sm">
                    <div className="form-group mb-sm-3">
                      <input
                        type="text"
                        id="floating_name"
                        onChange={handleOnNameChange}
                        value={name}
                        required
                      />
                      <label className="floating-label">Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-group">
                      <input
                        type="text"
                        id="floating_name"
                        onChange={handleOnPhoneOrEmailChange}
                        value={phoneOrEmail}
                        required
                      />
                      <label className="floating-label">Email or Phone *</label>
                    </div>
                  </div>
                </div>
                <h3 className="mt-5">What kind of project is this?</h3>
                <div className="projects">
                  <div className="project-item">
                    <input
                      id="website"
                      className="radio-button"
                      type="radio"
                      name="projects"
                      value="Website"
                      onChange={handleRadioButtonClick}
                      checked={project === "Website"}
                    />
                    <div className="radio-tile">
                      <label htmlFor="website">Website</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="branding"
                      name="projects"
                      value="Branding"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Branding"}
                    />
                    <div className="radio-tile">
                      <label htmlFor="branding">Branding</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="app"
                      name="projects"
                      value="App / Software"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "App / Software"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="app">App / Software</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="graphic-design"
                      name="projects"
                      value="Graphic Design"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Graphic Design"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="graphic-design">Graphic Design</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="consulting"
                      name="projects"
                      value="Consulting"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Consulting"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="consulting">Consulting</label>
                    </div>
                  </div>
                  <div className="project-item">
                    <input
                      type="radio"
                      id="other"
                      name="projects"
                      value="Other"
                      className="radio-button"
                      onChange={handleRadioButtonClick}
                      checked={project === "Other"}
                    />

                    <div className="radio-tile">
                      <label htmlFor="other">Other</label>
                    </div>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <textarea
                    required
                    rows={4}
                    onChange={handleProjectDescriptionChange}
                    value={projectDescription}
                  />
                  <label className="floating-label">
                    Describe your project *
                  </label>
                </div>
                <Button
                  className="mt-4"
                  disabled={
                    !name || !phoneOrEmail || !project || !projectDescription
                  }
                >
                  Submit Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
