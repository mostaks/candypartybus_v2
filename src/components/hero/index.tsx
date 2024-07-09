"use client";
import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import { usePathname } from "next/navigation";

const images = ["/home/hero-1.jpg", "/home/hero-2.jpg", "/home/hero-3.jpg"];

interface IHeroConfig {
  path: string;
  title: string;
  backgroundImage: string;
  useLogo: boolean;
  showCTA: boolean;
}

const configItems: IHeroConfig[] = [
  {
    path: "/",
    title: "",
    backgroundImage: "",
    useLogo: true,
    showCTA: true,
  },
  {
    path: "/about-us",
    title: "ABOUT CANDY PARTY BUS",
    backgroundImage: "about-us.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/book-your-event",
    title: "BOOK YOUR NEXT PARTY WITH CANDY PARTY BUS",
    backgroundImage: "book.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/themed-party-bus",
    title: "BIRTHDAY PARTIES ON WHEELS: LET'S CELEBRATE YOUR SPECIAL DAY!",
    backgroundImage: "triangles.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/vip-party-bus",
    title: "UNFORGETTABLE BUCKS AND HEN'S NIGHTS ON WHEELS",
    backgroundImage: "lazers.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/formal-bus-rental",
    title: "SCHOOL FORMALS: RIDE IN STYLE WITH CANDY PARTY BUSES!",
    backgroundImage: "triangles.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/wedding-transportation",
    title:
      "WEDDINGS & ENGAGEMENTS: CELEBRATE LOVE IN STYLE WITH CANDY PARTY BUSES!",
    backgroundImage: "cheers.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/corporate-event-transport",
    title:
      "CORPORATE EVENTS: ELEVATE YOUR CORPORATE GATHERING WITH CANDY PARTY BUSES",
    backgroundImage: "cool-night.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/airport-bus-transfer",
    title:
      "AIRPORT & CRUISE SHIP TRANSFERS: SEAMLESS TRAVEL WITH CANDY PARTY BUSES",
    backgroundImage: "harbor.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/bus-fleet",
    title: "DISCOVER OUR PARTY BUS FLEET IN SYDNEY",
    backgroundImage: "cool-wave.jpg",
    useLogo: false,
    showCTA: false,
  },
  {
    path: "/gallery",
    title: "VIEW OUR PHOTOS AND VIDEOS",
    backgroundImage: "woah.jpg",
    useLogo: false,
    showCTA: false,
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const path = usePathname();

  console.log(path);

  const config = configItems.find((x) => x.path === path);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage:
          path === "/"
            ? `url(${images[currentImageIndex]})`
            : `url(${config?.backgroundImage})`,
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {config?.useLogo && (
          <>
            <img
              style={{
                width: "20%",
                marginTop: 60,
                marginBottom: 20,
              }}
              src={"/palm-trees.svg"}
            />
          </>
        )}

        {path === "/" ? (
          <>
            <div className={styles.title}>WELCOME TO CANDY PARTY BUS:</div>
            <div className={styles.subtitle}>
              <span>YOUR </span>
              <span style={{ color: "rgb(70, 197, 231)" }}>RETRO </span>
              <span>RIDE TO EPIC MEMORIES!</span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.subtitle}>{config?.title}</div>
          </>
        )}

        {config.showCTA && (
          <>
            <a href="/book-your-event" className={styles.button}>
              All Aboard the Candy Party Bus Express!
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
