import { useEffect, useRef, useState } from "react";
import AnimationData from "../assets/lottie/listening_music.json";

export const LottieAnimation = ({ onMusicClick }) => {
  const ref = useRef();
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    let graphElement = null;
    const onClickEvent = () => {
      onMusicClick?.();
    };
    const timeout = setTimeout(() => {
      const svg = ref.current.firstChild;
      const graphParent = svg.lastChild.lastChild;
      graphElement = graphParent.lastChild;
      graphElement.addEventListener("click", onClickEvent);
    }, 1000);
    return () => {
      clearInterval(timeout);
      graphElement.removeEventListener("click", onClickEvent);
    };
  }, [ref, onMusicClick]);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        animationData: AnimationData,
      });

      return () => animation.destroy();
    }
  }, [lottie, ref]);

  return <div id="lottie" ref={ref} />;
};
