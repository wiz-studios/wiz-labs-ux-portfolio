"use client"

import { useCallback } from "react"
import type { Engine } from "@tsparticles/engine"
import type { ISourceOptions, RecursivePartial } from "@tsparticles/engine"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const particlesConfig: RecursivePartial<ISourceOptions> = {
  fpsLimit: 60,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: ["#00f3ff", "#00ff9d", "#bf00ff"],
    },
    links: {
      color: "#00f3ff",
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.3,
        },
      },
    },
  },
  detectRetina: true,
  background: {
    color: "transparent",
  },
}

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  )
}