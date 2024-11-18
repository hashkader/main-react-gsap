import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { duration: 1, y:100, yoyo: true, repeat:-1});
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      }}
    ></div>
  );
};

export default AnimatedBox;
