import React from "react";
import Image from "next/image";
import MoreIcon from "../assets/images/more.svg";

const BottomSliderControl = ({
  onMoreClick,
  onNext,
  onPrev,
  disablePrev,
  disableNext,
  variant = "desktop",
}) => {
  return (
    <div className="bottom-nav mobile-slider-nav">
      <button className="slider-button" onClick={onMoreClick}>
        <span className="material-symbols-rounded">close</span>
      </button>
      <button className="slider-button" disabled={disablePrev} onClick={onPrev}>
        <span className="material-symbols-rounded">chevron_left</span>
      </button>
      <button className="slider-button" disabled={disableNext} onClick={onNext}>
        <span className="material-symbols-rounded">chevron_right</span>
      </button>
    </div>
  );
};
export default BottomSliderControl;
