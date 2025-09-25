"use client"

import { useCallback } from "react"
import type { Container, Engine } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import { IParticlesProps } from "@tsparticles/react"

interface ParticlesConfig {
  fpsLimit: number
  fullScreen: {
    enable: boolean
    zIndex: number
  }
  particles: {
    color: {
      value: string[]
    }
    links: {
      color: string
      distance: number
      enable: boolean
      opacity: number
      width: number
    }
    collisions: {
      enable: boolean
    }
    move: {
      direction: string
      enable: boolean
      outModes: {
        default: string
      }
      random: boolean
      speed: number
      straight: boolean
    }
    number: {
      density: {
        enable: boolean
        width: number
        height: number
      }
      value: number
    }
    opacity: {
      value: number
    }
    shape: {
      type: string
    }
    size: {
      value: {
        min: number
        max: number
      }
    }
  }
  interactivity: {
    detectsOn: string
    events: {
      onHover: {
        enable: boolean
        mode: string
        parallax: {
          enable: boolean
          force: number
          smooth: number
        }
      }
      resize: {
        enable: boolean
      }
    }
    modes: {
      grab: {
        distance: number
        links: {
          opacity: number
        }
      }
    }
  }
  detectRetina: boolean
  background: {
    color: string
  }
}

const particlesConfig: ParticlesConfig = {
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
        width: 800,
        height: 800,
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
      resize: {
        enable: true,
      },
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
  const handleInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const Particles = require("@tsparticles/react").default

  return (
    <Particles
      id="tsparticles"
      loaded={handleInit}
      options={particlesConfig}
    />
  )
}