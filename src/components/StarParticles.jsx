"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // Arka plan rengi
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    detectRetina: true, // Retina ekran desteği
    fpsLimit: 120, // FPS sınırı
    interactivity: {
      detectsOn: "window", // Etkileşim pencerede algılanacak
      events: {
        onClick: {
          enable: true,
          mode: "repulse", // Tıklama ile parçacıkların uzaklaşması
        },
        onHover: {
          enable: true,
          mode: "bubble", // Fare üzerine geldiğinde baloncuk efekti
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          opacity: 0.5,
          size: 4,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 300, // Parçacık sayısı
        density: {
          enable: true,
          width: 1920, // Yoğunluk genişliği
          height: 1080, // Yoğunluk yüksekliği
        },
      },
      color: {
        value: [
          "#0F172A",
          "#3B3276",
          "#D0A4FC",
          "#703DAB",
          "#FFFFFF",
          "#FF9A8F",
        ], // Gradyan renkler
      },
      shape: {
        type: "circle", // Parçacık şekli
      },
      opacity: {
        value: { min: 0.1, max: 1 }, // Opaklık aralığı
        animation: {
          enable: true,
          speed: 1,
          sync: false,
          startValue: "random",
          destroy: "none",
        },
      },
      size: {
        value: { min: 1, max: 3 }, // Parçacık boyutu
        animation: {
          enable: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 1 }, // Parçacık hareket hızı
        direction: "none",
        outModes: {
          default: "out", // Çerçevenin dışına taşma
        },
        random: false,
        straight: false,
        trail: {
          enable: false,
        },
      },
      links: {
        enable: false, // Bağlantılar devre dışı
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "fixed", // Sabit pozisyon
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Diğer içeriklerin arkasında kalacak
      }}
    />
  );
};

export default StarParticles;
