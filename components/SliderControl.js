import Image from "next/image";
import MoreIcon from "../assets/images/more.svg";

const SliderControl = ({
  onMoreClick,
  onNext,
  onPrev,
  disablePrev,
  disableNext,
  variant = "desktop",
}) => {
  return (
    <div className="slider-nav">
      <button className="slider-button" onClick={onMoreClick}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="5" y="5" width="13.33" height="13.33" fill="#A2A0A1" />
          <rect x="5" y="22.3301" width="13.33" height="13.33" fill="#A2A0A1" />
          <rect x="22.33" y="5" width="13.33" height="13.33" fill="#A2A0A1" />
          <rect
            x="22.33"
            y="22.3301"
            width="13.33"
            height="13.33"
            fill="#A2A0A1"
          />
        </svg>
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

export default SliderControl;
