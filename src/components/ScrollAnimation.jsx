import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
      x: 1500,
      rotation: 360,
    });
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <div
        className="box"
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          position: "relative",
          left: "-700px",
          top: "-100px",
        }}
      ></div>
    </div>
  );
};

export default ScrollAnimation;
