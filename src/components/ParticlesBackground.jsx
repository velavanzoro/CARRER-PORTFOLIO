// File: src/components/ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: '#0d47a1' },
        },
        particles: {
          number: { value: 80 },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: 4 },
          move: { enable: true, speed: 1.2 },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 120,
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;