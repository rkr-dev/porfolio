import React from 'react';
import Particles from 'react-tsparticles';
import * as styles from './Particlesbg.module.css';



export const Particlesbg = () => {

  return (
    <Particles
      id="tsparticles"
      canvasClassName={styles.ParticleClass}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
          image: `url('')`,
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'contain',
          opacity: 1,
        },
        fpsLimit: 30,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: 'hsl(209, 61%, 16%)',
          },
          links: {
            color: 'hsl(10, 70%, 76%)',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              minimumValue: 1,
              speed: 10,
            },
          },
        },
        detectRetina: true,
      }}></Particles>
  );
};

