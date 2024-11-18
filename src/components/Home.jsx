import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const hashimRef = useRef([]);
  const kaderRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      hashimRef.current,
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: -150,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out',
      }
    )
    .fromTo(
      kaderRef.current,
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: -150,
        stagger: 0.1,
        duration: 1,
        ease: 'expo.out',
      },
      '-=1' // Overlap animations by 0.5 seconds
    );
  }, []);

  const renderText = (text, ref) =>
    text.split('').map((char, index) => (
      <span
        key={index}
        ref={(el) => (ref.current[index] = el)}
        style={{ fontFamily: 'Harmond', fontSize: '200px' }}
      >
        {char}
      </span>
    ));

  return (
    <div style={{ padding: '200px' }}>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'start' }}>
        {renderText('Hashim', hashimRef)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'end' }}>
        {renderText('Kader', kaderRef)}
      </div>
    </div>
  );
}; 

export default Home;
