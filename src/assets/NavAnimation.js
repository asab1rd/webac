import { TweenMax, Expo } from "gsap";
import { WOW } from "wowjs";

function AnimeIt() {
  TweenMax.from("#brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    "#menu li a",
    1,
    {
      delay: 0.4,
      opacity: 0,
      ease: Expo.easeInOut,
    },
    0.1,
  );
  new WOW().init();
}

export default AnimeIt;
