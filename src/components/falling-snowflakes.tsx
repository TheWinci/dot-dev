"use client";
import { Fragment, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { ISourceOptions } from "@tsparticles/engine";

const FallingSnowflakes = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Updated snowflake SVG with proper white color
const snowflakeSvg = `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-snowflake"
    >
        <path d="m10 20-1.25-2.5L6 18"/>
        <path d="M10 4 8.75 6.5 6 6"/>
        <path d="m14 20 1.25-2.5L18 18"/>
        <path d="m14 4 1.25 2.5L18 6"/>
        <path d="m17 21-3-6h-4"/>
        <path d="m17 3-3 6 1.5 3"/>
        <path d="M2 12h6.5L10 9"/>
        <path d="m20 10-1.5 2 1.5 2"/>
        <path d="M22 12h-6.5L14 15"/>
        <path d="m4 10 1.5 2L4 14"/>
        <path d="m7 21 3-6-1.5-3"/>
        <path d="m7 3 3 6h4"/>
    </svg>
`;

  const snowflakeDataUrl = `data:image/svg+xml;base64,${btoa(snowflakeSvg.trim())}`;

  const options: ISourceOptions = {
    key: "snow",
    name: "Snow",
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "image",
        options: {
          image: {
            src: snowflakeDataUrl,
            width: 24,
            height: 24,
          },
        },
      },
      opacity: {
        value: { min: 0.6, max: 1 },
      },
      size: {
        value: { min: 3, max: 15 },
      },
      rotate: {
        value: { min: 0, max: 360 },
        direction: "random",
        animation: {
          enable: true,
          speed: 0.5,
        },
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 },
        direction: "bottom",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      wobble: {
        enable: true,
        distance: 5,
        speed: 5,
      },
      zIndex: {
        value: {
          min: 0,
          max: 100,
        },
        opacityRate: 10,
        sizeRate: 10,
        velocityRate: 10,
      },
    },
  };

  if (init) {
    return (
      <div style={{ color: "white" }}>
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return <Fragment>Loading particles...</Fragment>;
};

export default FallingSnowflakes;
