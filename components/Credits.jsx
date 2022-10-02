import React from "react";
import Modal from "react-modal";

const Credits = ({ open, onClose }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={{
        base: "modal-credit-base",
        afterOpen: "modal-credit-base_after-open",
        beforeClose: "modal-credit-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={400}
    >
      <div className="credits">
        <button className="close-button" onClick={onClose}>
          <span className="material-symbols-rounded">close</span>
        </button>
        <div className="content">
          <h5>Credits</h5>
          <h6 className="title">Special Thanks to</h6>
          <div className="list">
            <div className="list-item">
              <span className="icon">💻</span>
              <p className="text">
                <b>Raison Joseph & Athul Antony</b> for developing this website
                pixel perfectly
              </p>
            </div>
            <div className="list-item">
              <span className="icon">🎧</span>
              <p className="text">
                <b>Spotify </b>for the music playlist widget
              </p>
            </div>
            <div className="list-item">
              <span className="icon">😀</span>
              <p className="text">
                <b>Emojipedia</b> for beautiful, free emoji’s
              </p>
            </div>
            <div className="list-item">
              <span className="icon">🏀</span>
              <p className="text">
                <b>Dribbble</b> for the shots listing API
              </p>
            </div>
          </div>
          <h6 className="title">Featured in</h6>
          <div className="list">
            <div className="list-item">
              <span className="icon">🌐</span>
              <p className="text">
                <b>Itsallwidgets</b>
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>All other content © {new Date().getFullYear()} Inspired Monster</p>
        </div>
      </div>
    </Modal>
  );
};

export default Credits;
